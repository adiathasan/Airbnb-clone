import { useState, useEffect } from "react";
import firestore from "../config/firebase";

function useRoom() {
  const [rooms, setRoom] = useState(null);

  useEffect(() => {
    firestore.collection("rooms").onSnapshot((snap) =>
      setRoom(
        snap.docs?.map((room) => {
          return {
            ...room.data(),
            id: room.id,
          };
        })
      )
    );
  }, []);
  return {
    rooms,
  };
}

export default useRoom;
