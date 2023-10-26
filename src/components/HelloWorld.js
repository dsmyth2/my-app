import React from "react";

function HelloWorld() {
  // add js code
  const imageSource = "../logo.svg";
  // anything within the return statement is JSX code
  return (
    <div className="parent-container">
      <h1>This is hello world from react js</h1>
      <h2>some sub heading written in react js</h2>
      {/* anything wrapped within curly braces inside return statement will be treated as JS code and not JSX code */}
      <img src={imageSource} alt="Logo" />
    </div>
  );
}

export default HelloWorld;
