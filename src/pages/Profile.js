import React from "react";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    console.log(auth.currentUser);
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : "not logged in";
}

export default Profile;
