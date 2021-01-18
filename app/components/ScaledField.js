import React, { useEffect, useRef, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  UIManager,
  View,
  Button,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { enableScreens } from "react-native-screens";
enableScreens();
import Animated, {
  interpolateNode,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

function ScaledField(props) {
  const scale = useSharedValue(0);

  const animScale = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(scale.value, {
            duration: 1000,
          }),
        },
      ],
    };
  });
  useEffect(() => {
    scale.value = 1;
  }, []);

  return (
    <>
      <Animated.View style={[styles.container, animScale]}>
        <TextInput placeholder="scale 0 to 1" style={styles.textInput} />
      </Animated.View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    backgroundColor: "lightblue",
    borderColor: "blue",
    borderWidth: 2,
  },
  textInput: {
    padding: 10,
    fontSize: 20,
  },
});

export default ScaledField;
