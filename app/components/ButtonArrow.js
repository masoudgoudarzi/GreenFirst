import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ButtonArrow({ style }) {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={["#FCC05E", "#FE9C7F", "#FD829E"]}
        style={styles.linear}
      >
        <Ionicons name="ios-arrow-round-forward" color="#fff" size={90} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 70,
    borderWidth: 15,
    borderColor: "#fff",
  },
  linear: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonArrow;
