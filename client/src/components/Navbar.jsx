import React from "react";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { db } from "../firebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
const Navbar = () => {
  const auth = getAuth();
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
  };
  //console.log(auth);
  const logout = () => {
    auth.signOut();
  };
  return (
    <>
      <div className="nav_bar">
        <div className="left">
          {/* //<h2>Social Media App</h2> */}
          {auth.currentUser ? (
            <>
              <img src={auth.currentUser?.photoURL} />
              <h3>{auth.currentUser?.displayName}</h3>
            </>
          ) : (
            <h2>Social Media App</h2>
          )}
        </div>
        <div className="right">
          <button className="btn btn-warning mx-3" onClick={googleClick}>
            Login With Google
          </button>
          <button className="btn btn-warning mx-3">Post</button>
          <button className="btn btn-warning mx-3">Profile</button>
          <button className="btn btn-warning mx-3">All Users</button>
          <button className="btn btn-warning mx-3" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
