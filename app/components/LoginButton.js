import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFormikContext } from "formik";

function Button({ style }) {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableWithoutFeedback onPress={handleSubmit}>
      <LinearGradient
        style={[styles.container, style]}
        colors={["#FCB961", "#FB8598"]}
      >
        <Ionicons
          name="ios-arrow-round-forward"
          color={colors.white}
          size={60}
        />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 15,
    borderColor: colors.white,
    backgroundColor: "rgba(0,0,0,0)",
  },
});

export default Button;
