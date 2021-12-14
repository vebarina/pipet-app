import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import backgroundImg from "../images/background.png";

function Header() {
  const personImage = require("../images/person.png");
  const backArrow = require("../images/back-arrow.png");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        imageStyle={{ resizeMode: "stretch" }}
        style={styles.backgroundImage}
      >
        <SafeAreaView>
          <Image source={backArrow} style={styles.arrow} />
          <View style={styles.headerContentContainer}>
            <Image source={personImage} style={styles.personImg} />
            <Text style={styles.text}>Te escuchamos ;)</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 253 + getStatusBarHeight(),
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  arrow: {
    marginLeft: 20,
    height: 12,
    width: 6.7,
    position: "absolute",
    top: 28 + getStatusBarHeight(),
  },
  headerContentContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  text: {
    color: "#323232",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: "500",
    alignSelf: "flex-end",
    marginRight: 32,
    fontFamily: "Roboto_500Medium",
  },
  personImg: {
    width: 142.9,
    height: 204,
    position: "absolute",
    bottom: 0,
    marginLeft: 32,
  },
});

export default Header;
