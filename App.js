import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import RatingSection from "./components/RatingSection";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  RedHatText_500Medium,
  RedHatText_400Regular_Italic,
} from "@expo-google-fonts/red-hat-text";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    RedHatText_500Medium,
    RedHatText_400Regular_Italic,
  });

  const buttonText = "Ok";

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAwareScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <Header />
        <RatingSection buttonText={buttonText} />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FCF8F8",
  },
  scrollView: {
    height: "50%",
    width: "100%",
  },
});
