import { Navigate } from "react-router-dom";
import { useState } from "react";

const appearAlert = () => {
  var alerted = localStorage.getItem('alerted') || '';
  if (alerted != 'yes') {
    alert("Sign In first");
    localStorage.setItem('alerted','yes');
   }
};

const Protected = ({ isAuth, children }) => {
  if (!isAuth) {
    appearAlert();
    return <Navigate to="/signin" replace />;
    }
  return children;
};
export default Protected;