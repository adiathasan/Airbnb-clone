import { useEffect, useState } from "react";
import { auth, timeStamp } from "../config/firebase";

function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(
        user
          ? {
              name: user.displayName,
              url: user.photoURL,
              timeStamp: timeStamp(),
              id: user.uid,
              email: user.email,
              image: user.photoURL,
              phone: user.phoneNumber,
            }
          : null
      );
    });
    return () => unsub();
  }, []);
  return {
    user,
  };
}

export default useAuth;
