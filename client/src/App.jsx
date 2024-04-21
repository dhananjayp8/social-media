import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost";
import Profile from "./components/Profile";
import AllUsers from "./components/AllUsers";
import GetPost from "./components/GetPost";
import PostDetails from "./components/PostDetails";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetPost />} />
          <Route path="/post" element={<AddPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
