import { View, Text, ScrollView } from "react-native";
import React from "react";
import InfoCard from "@/components/InfoCard/InfoCard";
import { Stack, Tabs } from "expo-router";

const GroupList = () => {
  return (
    <ScrollView className="gap-4">
      <Tabs.Screen
        options={{
          tabBarVisibilityAnimationConfig: {
            show: {
              animation: "timing",
            },
          },
        }}
      />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </ScrollView>
  );
};

export default GroupList;
