import React from "react";
import "./errorMessage.css";
import img from "./error.jpeg";

const ErrorMessage = () => {
  return (
    <>
      <div className='img-wrap'>
        <img src={img} alt="error" className='img-error'/>
      </div>
      <span>Something goes wrong :-(</span>
    </>
  );
};

export default ErrorMessage;
