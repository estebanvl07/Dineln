import { View, Text, TextInput, Pressable, TextInputProps } from "react-native";
import React, { ReactNode } from "react";

interface InputProps extends TextInputProps {
  startContent?: ReactNode;
  endContent?: ReactNode;
}

const CustomInput = (props: InputProps) => {
  return (
    <Pressable className="bg- bg-gray-200 rounded-full items-center px-4 py-2 placeholder-gray-600 flex-row">
      {props.startContent && <View className="pr-2">{props.startContent}</View>}
      <TextInput
        placeholder="Restaurante mirador"
        className="flex-grow"
        {...props}
      />
      {props.endContent && <View>{props.endContent}</View>}
    </Pressable>
  );
};

export default CustomInput;
