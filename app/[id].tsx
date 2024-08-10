import { View, Text, Image, Button, ScrollView, Pressable } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import example from "assets/example.jpeg";
import CustomText from "@/components/CustomText/CustomText";
import { StatusBar } from "expo-status-bar";
import { clsx } from "clsx";

const PlaceId = () => {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView>
      <StatusBar translucent />
      <Stack.Screen
        options={{
          headerTitle: "",
          headerTitleStyle: {
            color: "white",
          },
          headerShown: true,
          headerTransparent: true,
        }}
      />
      <Image
        source={example}
        className="w-full rounded-xl object-contain"
        style={{
          height: 450,
        }}
      />
      <View className="flex-row justify-between items-center my-2 px-4">
        <View>
          <CustomText className="text-xl" weight="semibold">
            Velexador
          </CustomText>
          <CustomText>Puerto Velero - Colombia</CustomText>
        </View>
        <CustomText weight="medium">7.8</CustomText>
      </View>
      <View className="px-4">
        <CustomText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt a
          illo nulla sed explicabo voluptatem dolorum ullam sit porro labore
          quae similique architecto, quisquam fugit laborum officiis. Suscipit?
        </CustomText>
        <CustomText className="text-xl mt-6" weight="semibold">
          Otros Servicios
        </CustomText>
        <CustomText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt a
          illo nulla sed explicabo voluptatem dolorum ullam sit porro labore
          quae similique architecto, quisquam fugit laborum officiis. Suscipit?
        </CustomText>
      </View>
      <Pressable className="bg-black items-center justify-center py-3 mx-4 rounded-full">
        <CustomText className="text-white">Reservar</CustomText>
      </Pressable>
    </ScrollView>
  );
};

export default PlaceId;
