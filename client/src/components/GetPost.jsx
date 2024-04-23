import React from "react";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState, useEffect } from "react";
import Post from "./Post";
const GetPost = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const postQuery = query(collection(db, "post"), orderBy("time", "desc"));
    const fetchData = async () => {
      await onSnapshot(postQuery, (snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchData();
    console.log(post);
  }, []);
  return (
    <>
      {post.map((data) => (
        <Post key={data.id} data={data} />
      ))}
    </>
  );
};

export default GetPost;
