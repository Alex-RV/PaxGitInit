import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase.js"
import "./styles.css"

function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  let navigate = useNavigate();

    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
      });}, [])
  
    const register = async () => {
      try {
        createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        ).then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
              const nameUser = registerName;
              localStorage.setItem("name", nameUser);
              navigate("/");
          });
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
        console.log(user);
        
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <div id='SignInMainDiv'>
        <h3> Register User </h3>
        <input
          placeholder="Name..."
          onChange={(event) => {
            setRegisterName(event.target.value);
          }}
        />
        <input
          placeholder="Email..."
          input type="email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          input type="password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>
  )
}

export default Signup