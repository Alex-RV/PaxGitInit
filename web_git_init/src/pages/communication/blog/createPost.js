import React, { useState, useEffect } from "react";
import { db, auth } from "../../../Firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, query, where, doc, getDocs } from "firebase/firestore";
import "../../styles.css"

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const getDataUser = async () => {
    const q = query(collection(db, "users"), where("email", "==", localStorage.getItem("email")));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        if(doc.get("email") == auth.currentUser.email){
            const name = String(doc.get("username"));
            console.log(name)
            auth.currentUser.displayName = name;
            const email = auth.currentUser.email;
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
        }
      });
    return(localStorage.getItem("name"));
  };

  const createPost = async () => {
    if (auth.currentUser.displayName == null || ""){
        if(localStorage.getItem("name") == null || ""){
            localStorage.setItem("name", "Anonymous");
        }
    }
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: localStorage.getItem("name"), id: auth.currentUser.uid },
    });
    navigate("/communication/blog");
  };



  return (
    window.onload = getDataUser,
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;