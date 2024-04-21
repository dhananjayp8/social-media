import React from "react";
import "../index.css";

const AddPost = () => {
  return (
    <>
      <div classname="container add_post">
        <htmform>
          <div classname="mb-3">
            <label htmFor="exampleInputEmail1" classname="htmform-label">
              Email address
            </label>
            <input
              type="email"
              classname="htmform-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" classname="htmform-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div classname="mb-3">
            <label htmFor="exampleInputPassword1" classname="htmform-label">
              Password
            </label>
            <input
              type="password"
              classname="htmform-control"
              id="exampleInputPassword1"
            />
          </div>
          <div classname="mb-3 htmform-check">
            <input
              type="checkbox"
              classname="htmform-check-input"
              id="exampleCheck1"
            />
            <label classname="htmform-check-label" htmFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" classname="btn btn-primary">
            Submit
          </button>
        </htmform>
      </div>
    </>
  );
};

export default AddPost;
