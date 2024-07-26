import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/home/header";
import Slider from "@/components/home/slider";

const home = () => {
  return (
    <View>
      <Header />
      <Slider />
    </View>
  );
};

export default home;
