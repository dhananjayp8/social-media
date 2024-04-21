import React from "react";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { db } from "../firebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  // const googleClick=aysnc()=>{
  //     const provider=new GoogleAuthProvider();
  //     const result=await signInWithPopup(auth,provider);
  //     console.log(result);
  // }
  const googleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    //console.log(result.user);
    //const user = result.user;

    //check for user

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        timestamp: serverTimestamp(),
      });
    }
    navigate("/profile");
  };
  //console.log(auth);
  const logout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <>
      <div className="nav_bar">
        <div className="left">
          <Link to={"/"} className="left">
            {/* //<h2>Social Media App</h2> */}
            {auth.currentUser ? (
              <>
                <img src={auth.currentUser?.photoURL} />
                <h3>{auth.currentUser?.displayName}</h3>
              </>
            ) : (
              <h2>Social Media App</h2>
            )}
          </Link>
        </div>
        <div className="right">
          <button className="btn btn-warning mx-3" onClick={googleClick}>
            Login With Google
          </button>
          <Link to={"/post"} className="btn btn-warning mx-3">
            Post
          </Link>
          <Link to={"/profile"} className="btn btn-warning mx-3">
            Profile
          </Link>
          <Link to={"/users"} className="btn btn-warning mx-3">
            All Users
          </Link>
          <button className="btn btn-warning mx-3" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
