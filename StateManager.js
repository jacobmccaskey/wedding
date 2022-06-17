import { createContext, useContext, useEffect, useState } from "react";

const DEFAULT_STATE = {
  maxWidth: "1110px",
  mobileMaxWidth: "600",
  isMobile: false,
  // width: window.document.documentElement.clientWidth,
  // height: window.document.documentElement.clientHeight
};

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [sharedState, setSharedState] = useState(DEFAULT_STATE);

  useEffect(() => {
    const setViewPoints = () => {
      setSharedState((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= DEFAULT_STATE.mobileMaxWidth,
      }));
    };
    setViewPoints();
    window.addEventListener("resize", setViewPoints);
  }, []);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
