import React from "react";
// import { StatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import Cesta from "./src/telas/Cesta";

const App = () => {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
};

export default App;
