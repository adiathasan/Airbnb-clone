import { useEffect, useState } from "react";
import { auth, timeStamp } from "../config/firebase";

function useAuth() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    auth.onAuthStateChanged(async (user) => {
      const { displayName, photoURL, uid, email, phoneNumber } = await user;
      setUser({
        name: displayName,
        url: photoURL,
        timeStamp: timeStamp(),
        id: uid,
        email: email,
        phone: phoneNumber,
      });
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return {
    user,
  };
}

export default useAuth;
