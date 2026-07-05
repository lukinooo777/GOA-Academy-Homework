import React, { Component } from "react";

class ErrorBoundary extends Component {

  // ვამოწმებთ მოხდა თუ არა შეცდომა
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // როდესაც შვილ კომპონენტში მოხდება შეცდომა,
  // hasError გახდება true
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  // აქ ვლოგავთ შეცდომას და ინფორმაციას
  // თუ რომელ კომპონენტში მოხდა
  componentDidCatch(error, errorInfo) {
    console.log("Error:", error);
    console.log("Error Info:", errorInfo);
  }

  render() {

    // თუ მოხდა შეცდომა
    if (this.state.hasError) {
      return <h1>რაღაც შეფერხდა</h1>;
    }

    // თუ შეცდომა არ არის
    return this.props.children;
  }
}

export default ErrorBoundary;