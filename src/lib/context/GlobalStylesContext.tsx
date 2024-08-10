import React, { createContext, ReactNode, useContext } from "react";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"; // Reemplaza con tu fuente
import AppLoading from "expo-app-loading";

const GlobalStylesContext = createContext({});

export const GlobalStylesProvider = ({ children }: { children: ReactNode }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const globalStyles = {
    fontFamily: "Montserrat_400Regular",
  };

  return (
    <GlobalStylesContext.Provider value={globalStyles}>
      {children}
    </GlobalStylesContext.Provider>
  );
};

export const useGlobalStyles = () => useContext(GlobalStylesContext);
