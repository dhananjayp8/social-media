import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ConvertDatetime from "./ConvertDatetime";
import { Link } from "react-router-dom";
const Post = ({ data }) => {
  console.log(data);

  const deletePost = async (id) => {
    alert("Your post will delete permenantely");
    const deleteData = doc(db, "post", id);
    await deleteDoc(deleteData);
  };
  return (
    <>
      <div className="container post_con">
        <div className="post_user">
          <img src={data.photoUrl} alt="" />
          <h3>{data.author}</h3>
        </div>
        <div className="card mb-3 post_card bg-secondary">
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                src={data.imageUrl}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center text-light">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text">
                  {/* <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small> */}
                  <ConvertDatetime
                    seconds={data.time.seconds}
                    nanoseconds={data.time.nanoseconds}
                  />
                </p>
                <button className=" btn btn-info mx-3 ">
                  <h6>Comments </h6>
                </button>
                <Link to={`/post/${data.id}`} className="btn btn-warning mx-3">
                  <h6>View More</h6>
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() => deletePost(data.id)}
                >
                  <h6>Delete</h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
