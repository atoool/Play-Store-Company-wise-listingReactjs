/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import axios from "axios";

export const useApi = (uri) => {
  useEffect(() => {
    const onMount = async () => {
      await axios.get(uri).catch(() => {});
    };
    onMount();
  }, []);
};
