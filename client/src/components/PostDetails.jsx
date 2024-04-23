import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const PostDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    const getSingleDoc = async (id) => {
      const ref = doc(db, "post", id);
      getDoc(ref).then((doc) => setData(doc.data()));
    };
    getSingleDoc(id);
    console.log("Single Doc ", data);
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="post_detail">
          <div className="post_detail img">
            <img src={data.imageUrl} alt="" />
          </div>
          <div className="post_detail_user"></div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
