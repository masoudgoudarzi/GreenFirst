import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function ButtonPlain({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.text}>ثبت نام</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "8%",
    backgroundColor: "#1A202E",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 26,
    color: "#fff",
  },
});
export default ButtonPlain;
