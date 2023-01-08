import React, { useState, useEffect}from 'react';
import "./styles.css"
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from "firebase/auth";
import { collection, query, where, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../Firebase.js"


const Profile = () => {
	const getDataUser = async () => {
		const q = query(collection(db, "users"), where("email", "==", localStorage.getItem("email")));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			console.log(doc.id, " => ", doc.data());
			if(doc.get("email") == auth.currentUser.email){
				const name = String(doc.get("username"));
				console.log(name)
				auth.currentUser.displayName = name;
				localStorage.setItem("name", name);
			}
		  });
		return(localStorage.getItem("name"));
	  };
	
return (
	window.onload = getDataUser,
	<div id='MainDiv'>
	<h1>Profile :</h1>
	<h1>{localStorage.getItem("name")}</h1>
	<h1>{localStorage.getItem("email")}</h1>
	</div>
);
};

export default Profile;