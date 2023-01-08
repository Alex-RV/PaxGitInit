import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
} from "firebase/auth";
import "./styles.css"
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase.js"

function SignIN2() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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
  

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      if(auth.currentUser.emailVerified == true){
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        window.location.pathname = "/";
      }

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  const verify = async () => {
    console.log(auth.currentUser.emailVerified );
    console.log(auth.currentUser.email);
    console.log(isAuth);
  };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
          type="email"
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
            type="password"
          }}
        />
        <input
          placeholder="Name..."
          onChange={(event) => {
            setRegisterName(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
        <button onClick={verify}> verify</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
            type="email"
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
            type="password"
          }}
        />

        <button onClick={login}> Log in</button>
      </div>

      <h4> User Logged In: </h4>
      {user ? user.email : "Not Logged In"}
      {/* {auth.currentUser.emailVerified && "TRUE"} */}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default SignIN2;