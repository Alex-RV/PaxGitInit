import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase.js"
import { addDoc, collection } from "firebase/firestore";
import "./styles.css"
import { getDatabase, ref, set } from "firebase/database";

function Signup() {
  const usersCollectionRef = collection(db, "users");
  
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [userId, setUserId] = useState("");

  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  // function addUsers(userId, registerName, registerEmail) {
  //   const db = getDatabase();
  //   set(ref(db, 'users/' + userId), {
  //     username: registerName,
  //     email: registerEmail,
  //   });
  // }

  const addUsers = async () => {
    await addDoc(usersCollectionRef, {
      email: registerEmail,
      username: registerName,
    });
  };

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
            setUserId("id" + Math.random().toString(16).slice(2));
            addUsers();
            navigate("/signin");
            alert("Successfully created accaunt, please verify email and Sign-IN");
        });
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message);
      });
      console.log(user);
      
    } catch (error) {
      console.log(error.message);
      alert(error.message);
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