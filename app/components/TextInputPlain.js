import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useState } from "react";

function TextInputPlain({ label, error, placeholder, ...otherProps }) {
  const [isPlaceholder, setIsPlaceholder] = useState(placeholder);

  const animLabelY = useSharedValue(45);
  const opacity = useSharedValue(0);

  const animLabelStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(animLabelY.value) }],
      opacity: withSpring(opacity.value),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={animLabelStyle}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
      <View style={styles.box}>
        <MaterialCommunityIcons name="account" size={40} color="#66D8A4" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#7C808A"
          {...otherProps}
          placeholder={isPlaceholder}
          onFocus={() => {
            (animLabelY.value = 0), (opacity.value = 1), setIsPlaceholder("");
          }}
        />
        <FontAwesome
          name="warning"
          size={40}
          color="orangered"
          style={styles.errorIcon}
        />
      </View>
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "70%",
    fontSize: 25,
    textAlign: "right",
    marginRight: 15,
    writingDirection: "rtl",
  },
  box: {
    backgroundColor: "#F1F5F9",
    alignSelf: "center",
    paddingVertical: 5,
    width: "95%",
    borderRadius: 10,
    flexDirection: "row-reverse",
    marginVertical: 5,
    borderWidth: 3,
    borderColor: "#61ff93",
  },
  errorIcon: {
    marginRight: 5,
  },
  errorMessage: {
    fontSize: 17,
    marginRight: 10,
    color: "orangered",
  },
  container: {
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 25,
  },
});
export default TextInputPlain;
