import React from "react";
import './errorMessage.css';
import img from './error.jpg'

const ErrorMessage = () => {
    return (
        <>
              <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error"/> 
            <span style={{ display: 'block', width: "250px", marginLeft: "32%", }}>Somthing goes wrong</span>
        </>
        
    )
}

export default ErrorMessage;