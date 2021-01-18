import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defautlStyle from "../config/style";

function AppTextInput({
  icon,
  iconSize = 40,
  iconColor = "#6D6D6D",
  placeholder,
  name,
}) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.container}>
        <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          placeholderTextColor="#6D6D6D"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    marginBottom: 20,
  },
  text: {
    alignSelf: "flex-end",
    marginRight: 6,
    fontSize: 22,
    color: "#A3A3A3",
  },
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row-reverse",
    borderBottomWidth: 2,
    borderBottomColor: "#FFDFD6",
  },
  textInput: {
    fontSize: 20,
    paddingRight: 5,
    textAlign: "right",
    width: "100%",
  },
});

export default AppTextInput;
