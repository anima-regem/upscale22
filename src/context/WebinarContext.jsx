import { useState, createContext } from "react";

export const WebinarContext = createContext(null);

export const WebinarContextProvider = ({ children }) => {
  const [webinarData, setWebinarData] = useState([]);

  return (
    <WebinarContext.Provider value={{ webinarData, setWebinarData }}>
      {children}
    </WebinarContext.Provider>
  );
};
