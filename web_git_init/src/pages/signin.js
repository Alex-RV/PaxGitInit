import React, { useState, useEffect } from 'react'
import { auth, provider, db } from "../Firebase.js"
import { signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
import "./styles.css"
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  

  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });}, [])


  //Login with EMAIL AND PASSWORD
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      if(auth.currentUser.emailVerified === true){
        setIsAuth(true);
        localStorage.setItem("isAuth", true);

        const emailUser = auth.currentUser.email;
        localStorage.setItem("email", emailUser);

        window.location.pathname = "/";
      }
      else if(auth.currentUser.emailVerified === false){
        alert("Please verify your email first");
      }
      else{
        alert("ERROR");
      }

      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  //Login with EMAIL AND PASSWORD/////////

  //LOGIN WITH GOOGLE
  const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((resulte) => {
        setIsAuth(true);
        const name = resulte.user.displayName;
        const email = resulte.user.email;
        const profilPic = resulte.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilPic", profilPic);

        localStorage.setItem("isAuth", true);
        
        // navigate("/");
        window.location.pathname = "/";
        
        
    }).catch((error) => {
        console.log(error);
    });}
  //LOGIN WITH GOOGLE////////

  //Verify Data
    const verify = async () => {
      console.log(auth.currentUser.emailVerified );
      console.log(auth.currentUser.email);
      console.log(isAuth);
    };
  //Verify Data///////////



  
  return (
    <div id='SignInMainDiv'>
    <div className="signin">
    <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          type="email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
        <h6>Not yet register? <span>
        <form action="/signup" class="inline">
            <button class="float-left submit-button" >SignUp</button>
        </form>
        </span></h6>
      </div>


    <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign-In with Google</button>

    </div>
    </div>
  )
}

export default SignIn