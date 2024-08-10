import { View, Text } from "react-native";
import React from "react";
import { Stack, Slot } from "expo-router";

const _layout = () => {
  return (
    <View className="flex-1">
      <Slot />
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack> */}
    </View>
  );
};

export default _layout;
