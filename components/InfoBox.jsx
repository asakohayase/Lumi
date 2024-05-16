import { View, Text } from "react-native";
import React from "react";

const InfoBox = ({ title, subTitle, containerStyles, textStyles }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${textStyles}`}>
        {title}
      </Text>
      <Text
        className={`text-sm text-gray-100 text-center font-pregular ${textStyles}`}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export default InfoBox;
