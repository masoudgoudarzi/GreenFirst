import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return <Text style={styles.text}></Text>;
  return <Text style={styles.text}>{error}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.danger,
    fontSize: 17,
    paddingRight: "10%",
    paddingTop: "1%",
  },
});

export default ErrorMessage;
