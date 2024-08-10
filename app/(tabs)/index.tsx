import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CustomText from "@/components/CustomText/CustomText";
import Screen from "@/components/ScreenLayout";
import { badges } from "@/lib/constants";
import Badge from "@/components/Badge/Badge";
import InfoCard from "@/components/InfoCard/InfoCard";
import Section from "@/components/SectionItems/Section";
import CustomInput from "@/components/Input/CustomInput";
import { SearchIcon } from "@/components/Icons/Icons";

const index = () => {
  return (
    <Screen>
      <ScrollView
        className=" bg-white h-full"
        showsVerticalScrollIndicator={false}
      >
        <CustomText weight="bold" className="text-4xl -tracking-widest my-2">
          Dineln.
        </CustomText>
        <CustomInput startContent={<SearchIcon size={20} color="#4b5563" />} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row my-4"
        >
          {badges.map((title, index) => (
            <Badge title={title} isActive={index === 0} />
          ))}
        </ScrollView>
        <Section showHeader={false} title="" href="" items={[1, 2, 3, 4, 6]} />
        <Section title="Mas Populares" href="/group/dfbfd" items={[1, 2, 3]} />
        <Section title="Mejores Rankeados" href="/group/rfgrg" items={[1, 2]} />
      </ScrollView>
    </Screen>
  );
};

export default index;
