/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { db } from "../utils/firebase-admin";

const useFirestore = ({ update, dev = "riafy" }) => {
  useEffect(() => {
    const subscriber = db
      .collection("riafy-store")
      .doc(dev)
      .onSnapshot((documentSnapshot) => {
        update(documentSnapshot?.data()?.apps);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [dev]);
};

export default useFirestore;
