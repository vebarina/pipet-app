import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import CustomButton from "./CustomButton";
import { Rating } from "react-native-ratings";
import axios from "axios";

function asdasdAsdasd(asdasdasd) {
  if (true) {
    console.log(" asdasd as das das dasd ");
  }
}

function RatingSection(props) {
  const [ratings, setRatings] = useState([]);
  const [text, onChangeText] = useState("");
  const { buttonText } = props;

  function rate(index, rating) {
    const updatedRatings = ratings;
    updatedRatings[index] = { rating };
    setRatings(updatedRatings);
  }

  function submitReview() {
    const opinions = ratings.map((item) => item.rating);
    console.log("submit:", opinions, text);

    const data = {
      opinions,
      text,
      walk_id: 0,
      walker_id: 0,
    };

    console.log("data", data);

    axios
      .post("https://pipet.herokuapp.com/enunciado-3", data)
      .then((response) => {
        console.log("response", response);
        Alert.alert("Gracias por tu feedback!");
      })
      .catch((error) => {
        console.log("error", error);
        Alert.alert("Algo salió mal. Intentá nuevamente.");
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.text}>¿Cómo calificas el paseo?</Text>
        <Rating
          type="custom"
          ratingCount={5}
          startingValue={0}
          imageSize={30}
          onFinishRating={(rating) => rate(0, rating)}
          style={{ paddingVertical: 10 }}
          ratingColor="#2E384D"
          ratingBackgroundColor="#9D9D9C"
          tintColor="#FCF8F8"
        />
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.text}>Puntualidad</Text>
        <Rating
          type="custom"
          ratingCount={5}
          startingValue={0}
          imageSize={30}
          onFinishRating={(rating) => rate(1, rating)}
          style={{ paddingVertical: 10 }}
          ratingColor="#2E384D"
          ratingBackgroundColor="#9D9D9C"
          tintColor="#FCF8F8"
        />
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.text}>Trato con las mascotas</Text>
        <Rating
          type="custom"
          ratingCount={5}
          startingValue={0}
          imageSize={30}
          onFinishRating={(rating) => rate(2, rating)}
          style={{ paddingVertical: 10 }}
          ratingColor="#2E384D"
          ratingBackgroundColor="#9D9D9C"
          tintColor="#FCF8F8"
        />
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.text}>Presentación</Text>
        <Rating
          type="custom"
          ratingCount={5}
          startingValue={0}
          imageSize={30}
          onFinishRating={(rating) => rate(3, rating)}
          style={{ paddingVertical: 10 }}
          ratingColor="#2E384D"
          ratingBackgroundColor="#9D9D9C"
          tintColor="#FCF8F8"
        />
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.text}>Atención</Text>
        <Rating
          type="custom"
          ratingCount={5}
          startingValue={0}
          imageSize={30}
          onFinishRating={(rating) => rate(4, rating)}
          style={{ paddingVertical: 10 }}
          ratingColor="#2E384D"
          ratingBackgroundColor="#9D9D9C"
          tintColor="#FCF8F8"
        />
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.text}>Dejanos tu opinión</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Contanos como te fue :)"
          onChangeText={onChangeText}
          value={text}
        />
      </View>

      <CustomButton buttonText={buttonText} onClick={() => submitReview()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FCF8F8",
    alignContent: "center",
    paddingLeft: 32,
    paddingRight: 32,
  },
  ratingContainer: {
    alignItems: "flex-start",
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    color: "#9D9D9C",
    fontSize: 14,
    fontFamily: "RedHatText_500Medium",
  },
  input: {
    height: 138,
    width: "100%",
    borderRadius: 10,
    fontFamily: "RedHatText_400Regular_Italic",
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginBottom: 20,
    marginTop: 20,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});

export default RatingSection;
