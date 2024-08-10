import { View, Text, ScrollView } from "react-native";
import React from "react";
import CustomText from "../CustomText/CustomText";
import { Link } from "expo-router";
import InfoCard from "../InfoCard/InfoCard";

interface SectionProps {
  title: string;
  href: string;
  showHeader?: boolean;
  hrefLabel?: string;
  items: any[];
}

const Section = ({
  title,
  href,
  showHeader = true,
  hrefLabel = "Ver más",
  items,
}: SectionProps) => {
  return (
    <View className="my-4">
      {showHeader && (
        <View className="mb-4 justify-between flex-row">
          <CustomText className="text-xl" weight="semibold">
            {title}
          </CustomText>
          <Link href={href}>
            <CustomText className="text-blue-600">{hrefLabel}</CustomText>
          </Link>
        </View>
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {items.map(() => (
          <InfoCard />
        ))}
      </ScrollView>
    </View>
  );
};

export default Section;
