import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Fimage from "./assets/Fimage.webp"

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <h3 style={{ fontSize: "50px", color: "red", marginLeft: "25%", fontFamily: "cursive", marginTop: "20px", marginBottom: "-50px" }}>Registeration form for retailers</h3>
      <div className='form-container'>

        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img style={{ width: "100%", height: "55%" }} className='form-img' src={Fimage} alt='' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
