import { View, Text, Image, Dimensions } from "react-native";
import React from "react";


import { BgImage, Logo } from "../assets";

const Home = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  return (
    <View className="flex-1 items-center justify-start">
      <Image
        source={BgImage}
        resizeMode="contain"
        className="h-90"
        style={{ width: screenWidth }}
      />

      {/* View Principal */}
      <View className="w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 px-6 space-y-6">
        <Image source={Logo}
          className="w-16 h-16"
          resizeMode="contain"
        
        />

        <Text className="text-xl font-bold text-gray-800">IMC Calculator!</Text>
      </View>
    </View>
  );
};

export default Home;
