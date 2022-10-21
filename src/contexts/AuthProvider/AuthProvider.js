import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import firebaseApp from "../../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const providerLogin = (provider) => {
    signInWithPopup(auth, provider);
    console.log(user);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, providerLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
