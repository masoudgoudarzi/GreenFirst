import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyle from "../config/style";
import AppText from "./AppText";

function AppTextInput({
  icon,
  color = "#B2C4CF",
  size = 30,
  style,
  text,
  width = " 100%",
  ...otherProps
}) {
  return (
    <>
      {text && (
        <View style={styles.text}>
          <AppText>{text}</AppText>
        </View>
      )}

      <View style={[styles.container, style]}>
        {icon && (
          <MaterialCommunityIcons size={size} color={color} name={icon} />
        )}
        <TextInput
          style={[
            defaultStyle.text,
            {
              width,
              writingDirection: "rtl",
              textAlign: "right",
              paddingHorizontal: 10,
            },
          ]}
          {...otherProps}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row-reverse",
    borderWidth: 2,
    borderColor: "#E9ECF0",
    borderRadius: 50,
    padding: 10,
    marginTop: "3%",
  },
  text: {
    padding: 10,
  },
});

export default AppTextInput;
