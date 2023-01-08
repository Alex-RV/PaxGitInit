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
        const name = doc.get("username");
        console.log(name)
        localStorage.setItem("name", name);
      });
    return(localStorage.getItem("name"));
  };

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: localStorage.getItem("name"), id: auth.currentUser.uid },
    });
    navigate("/communication/blog");
  };



  return (
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