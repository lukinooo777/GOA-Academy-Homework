

import React from "react";

class CartErrorBoundary extends React.Component {
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

 
  handleReset = () => {
    this.setState({ hasError: false });

   
    this.props.onReset();
  };

  render() {
    
    if (this.state.hasError) {
      return (
        <div
          style={{
            border: "2px solid red",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2>კალათის ჩატვირთვა ვერ მოხერხდა.</h2>

          <button onClick={this.handleReset}>
            კალათის გასუფთავება (Reset)
          </button>
        </div>
      );
    }

       
    return this.props.children;
  }
}

export default CartErrorBoundary;