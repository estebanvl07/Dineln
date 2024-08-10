import React from "react";
import { Tabs } from "expo-router";
import { HomeIcon, MapIcon, SearchIcon } from "@/components/Icons/Icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShadowVisible: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignContent: "center",
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          margin: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <MapIcon />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color }) => <SearchIcon />,
        }}
      />
    </Tabs>
  );
}
