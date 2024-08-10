import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import CustomText from "../CustomText/CustomText";
import example from "assets/example.jpeg";
import { clsx } from "clsx";
import { Link } from "expo-router";

const InfoCard = () => {
  return (
    <Link href={"/8"} asChild>
      <Pressable>
        <View className="w-72 mr-4">
          <Image
            source={example}
            className="w-full h-48 rounded-xl object-contain"
          />
          <View className="flex-row justify-between items-center mt-2 px-2">
            <View>
              <CustomText className="text-lg" weight="semibold">
                Velexador
              </CustomText>
              <CustomText>Puerto Velero - Colombia</CustomText>
            </View>
            <CustomText weight="medium">7.8</CustomText>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default InfoCard;
