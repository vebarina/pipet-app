import React from "react";
import { View, Pressable, Alert, StyleSheet, Text } from "react-native";

function CustomButton(props) {
  const { buttonText, onClick } = props;

  return (
    <View>
      <Pressable style={styles.button} onPress={onClick}>
        <Text style={styles.text}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    width: "100%",
    height: 40,
    borderRadius: 32,
    backgroundColor: "#2F3542",
    marginBottom: 50,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 16.41,
    fontFamily: "Roboto_700Bold",
  },
});

export default CustomButton;
