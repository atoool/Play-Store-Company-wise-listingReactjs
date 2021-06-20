import React, { createContext } from "react";

export const AppData = createContext({
  data: [],
  onSetData: () => {},
  onSearch: () => {},
});
export const AppDataProvider = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [storeData, setStoreData] = React.useState([]);
  const onSetData = (dt) => {
    if (dt) {
      setData([...dt]);
      setStoreData([...dt]);
    }
  };
  const onSearch = (txt) => {
    if (txt === "") {
      setData([...storeData]);
    } else {
      const temp = storeData?.filter(
        (itm) => itm?.title?.toLowerCase().indexOf(txt?.toLowerCase()) > -1
      );
      setData([...temp]);
    }
  };
  const value = { data, onSetData, onSearch };
  return <AppData.Provider value={value}>{children}</AppData.Provider>;
};
