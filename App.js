// @ts-nocheck
import React from "react";
import { useFonts } from "expo-font";
import { View } from "react-native";

//Navigation
import DrawerNavigation from "./app/navigation/DrawerNavigation";

export default function App() {
  const [fontLoaded] = useFonts({
    Ionicons: require("react-native-ionicons/fonts/Ionicons.ttf"),
    "mix-arab": require("./app/assets/fonts/mix-arab.ttf"),
    "mix-arab-regular": require("./app/assets/fonts/mix-arab-regular.ttf"),
    "mix-arab-bold": require("./app/assets/fonts/mix-arab-bold.ttf"),
    "mix-arab-medium": require("./app/assets/fonts/mix-arab-medium.ttf"),
  });

  return fontLoaded ? (
    <View style={{ flex: 1 }}>
      <DrawerNavigation />
    </View>
  ) : (
    <></>
  );
}
