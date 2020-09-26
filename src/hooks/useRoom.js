import { useState, useEffect } from "react";
import firestore from "../config/firebase";

function useRoom() {
  const [rooms, setRoom] = useState(null);

  const fetchRooms = async () => {
    firestore.collection("rooms").onSnapshot(async (snap) => {
      const { docs } = await snap;
      setRoom(
        docs?.map((room) => {
          return {
            ...room.data(),
            id: room.id,
          };
        })
      );
    });
  };

  useEffect(() => {
    fetchRooms();
  }, []);
  return {
    rooms,
  };
}

export default useRoom;
