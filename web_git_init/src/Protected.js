import { Navigate } from "react-router-dom";
import { useState } from "react";


const Protected = ({ isAuth, children }) => {
  if (!isAuth) {
    alert("Sign In first")
    return <Navigate to="/signin" replace />;
    }
  return children;
};
export default Protected;