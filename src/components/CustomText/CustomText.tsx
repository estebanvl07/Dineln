import React, { FC } from "react";
import { TextProps } from "react-native/Libraries/Text/Text";
import { Text } from "react-native";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

interface CustomTextProps extends TextProps {
  weight?: "regular" | "medium" | "semibold" | "bold";
}

const CustomText: FC<CustomTextProps> = ({
  style,
  weight = "regular",
  ...props
}) => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  const familyWeight = {
    regular: "Montserrat_400Regular",
    medium: "Montserrat_500Medium",
    semibold: "Montserrat_600SemiBold",
    bold: "Montserrat_800ExtraBold",
  }[weight];

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text style={[{ fontFamily: familyWeight }, style]} {...props}>
      {props.children}
    </Text>
  );
};

export default CustomText;
