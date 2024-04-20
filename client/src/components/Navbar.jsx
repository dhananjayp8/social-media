import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav_bar">
        <div className="left">
          <h2>Social Media App</h2>
        </div>
        <div className="right">
          <button className="btn btn-warning mx-5">Login With Google</button>
          <button className="btn btn-warning ">All Users</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
