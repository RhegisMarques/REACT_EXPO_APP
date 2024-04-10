import { View, Text, Image, Dimensions } from "react-native";
import React from "react";


import { BgImage } from "../Img";

const HomeScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  return (
    <View>
      <Image souce={BgImage}/>
    </View>
  );
};

export default HomeScreen;
