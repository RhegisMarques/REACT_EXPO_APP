import { View, Text, Image, Dimensions } from "react-native";
import React from "react";


import { BgImage, Logo } from "../assets";

const Home = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BgImage}
        resizeMode="cover"
        className="h-92"
        style={{ width: screenWidth }}
      />
      
    </View>
  );
};

export default Home;
