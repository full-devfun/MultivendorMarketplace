import { useState, useEffect } from "react";
import { auth, db, analytics } from "../Firebase";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(user => {
    return {
      initializing: true,
      user
    };
  });

  useEffect(() => {
    async function onChange(user) {
      if (user && user.uid) {
        analytics.setUserId(user.uid);
        try {
          db.collection("users")
            .doc(user.uid)
            .onSnapshot(doc => {
              const userData = doc.data();
              setState({ initializing: false, userData });
              dispatch({ type: "login_user", payload: userData });
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        setState({ initializing: false });
      }
    }

    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, [dispatch]);

  return state;
};

export default useAuth;
