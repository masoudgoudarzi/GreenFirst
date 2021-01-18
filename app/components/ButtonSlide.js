import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ButtonSlide() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> ثبت نام </Text>
    </View>
  );
}

export default ButtonSlide;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 70,
    backgroundColor: "#FF7F56",
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontSize: 40,
    paddingBottom: 5,
  },
});
