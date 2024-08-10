import { ReactNode } from "react";
import { View } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children }: { children: ReactNode }) {
  return (
    <View
      className="flex-1 px-4 bg-white"
      style={{
        paddingTop: Constants.statusBarHeight,
      }}
    >
      {children}
    </View>
  );
}
