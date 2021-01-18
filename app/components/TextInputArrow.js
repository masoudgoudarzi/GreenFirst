import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

function TextInputArrow({ placeholder, name, iconName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.textInputBox}>
        <MaterialCommunityIcons
          name={iconName}
          size={40}
          color="#B2C4CF"
          style={styles.icon}
        />
        <TextInput placeholder={placeholder} style={styles.textInput} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textInputBox: {
    width: "99%",
    height: 60,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#B2C4CF",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 25,
    paddingRight: 20,
    color: "#454C8C",
    paddingBottom: 5,
    alignSelf: "flex-end",
  },
  textInput: {
    fontSize: 22,
    writingDirection: "rtl",
    width: "100%",
    textAlign: "right",
  },
});
export default TextInputArrow;
