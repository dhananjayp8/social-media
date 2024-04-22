import React, { useState } from "react";
//import "../index.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const AddPost = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      await uploadTask;

      const url = await getDownloadURL(uploadTask.snapshot.ref);
      console.log("Download url :", url);
      const data = {
        author: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoUrl: auth.currentUser.photoURL,
        userId: auth.currentUser.uid,
        imageUrl: url,
        title,
        description,
        time: serverTimestamp(),
      };
      const saveData = await addDoc(collection(db, "post"), data);
      setDescription("");
      setTitle("");
      navigate("/");
    } catch (error) {
      console.error("Error", error.message);
    }
  };
  return (
    <>
      <div className="container add_post my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              value={description}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Img
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPost;
