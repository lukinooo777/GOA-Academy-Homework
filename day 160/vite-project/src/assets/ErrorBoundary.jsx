// ErrorBoundary.jsx

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

 
  componentDidCatch(error, info) {
    console.log("დაფიქსირდა შეცდომა:", error);
    console.log("ინფორმაცია:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          ამინდის მონაცემების ჩატვირთვა ვერ მოხერხდა. სცადეთ მოგვიანებით.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;