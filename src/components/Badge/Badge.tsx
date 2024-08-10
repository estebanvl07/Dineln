import { View, Text, Pressable } from "react-native";
import React from "react";
import clsx from "clsx";

interface BadgeProps {
  title: string;
  isActive: boolean;
}

const Badge = ({ title, isActive }: BadgeProps) => {
  return (
    <Pressable
      className={clsx(
        "py-1 px-4 rounded-full bg-gray-200 items-center justify-center",
        {
          "bg-black": isActive,
        }
      )}
    >
      <Text
        className={clsx("text-sm", {
          "text-gray-600": !isActive,
          "text-white": isActive,
        })}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Badge;
