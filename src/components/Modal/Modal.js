import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [favColor, setFavColor] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  return (
    <div className="modal">
      <h3>Enter Your Info</h3>
      <form>
        <label>First Name</label>
        <input value={first} onChange={e => setFirst(e.target.value)}></input><br/>
        <label>Last Name</label>
        <input value={last} onChange={e => setLast(e.target.value)}></input><br/>
        <label>Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)}></input><br/>
        <label>Story</label>
        <input value={story} onChange={e => setStory(e.target.value)}></input><br/>
        <label>Favorite Color</label>
        <input value={favColor} onChange={e => setFavColor(e.target.value)}></input><br/>
        <label>Photo Url</label>
        <input value={photoURL} onChange={e => setPhotoURL(e.target.value)}></input><br/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Modal;
