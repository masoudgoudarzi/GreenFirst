import React from "react";
import { Button, View, StyleSheet, Text, ImageBackground } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSpring,
} from "react-native-reanimated";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const FieldAnimation = () => {
  const offset = useSharedValue(50);
  const opacity = useSharedValue(0);
  const shadow = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(offset.value, {
            duration: 1000,
          }),
        },
      ],
      opacity: withTiming(opacity.value, {
        duration: 1000,
      }),
    };
  });
  const shadowStyle = useAnimatedStyle(() => {
    return {
      elevation: withTiming(shadow.value, {
        duration: 1000,
      }),
    };
  });

  return (
    <View style={styles.imgback}>
      <Animated.View style={animatedStyles}>
        <Text style={styles.text}>شماره همراه</Text>
      </Animated.View>
      <Animated.View style={[styles.box, shadowStyle]}>
        <MaterialCommunityIcons
          size={40}
          name="account"
          style={styles.icon}
          color="lightblue"
        />
        <TextInput
          style={styles.textInput}
          placeholder="09123456789"
          onFocus={() => {
            (offset.value = 0), (opacity.value = 1), (shadow.value = 5);
          }}
        />
        <View style={styles.info} />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  imgback: {
    flex: 1,
    backgroundColor: "lightblue",
    // justifyContent: "center",
  },
  box: {
    width: "100%",
    height: 60,
    borderWidth: 3,
    borderColor: "#fff",
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  textInput: {
    width: "77%",
    fontSize: 26,
    textAlign: "right",
    writingDirection: "rtl",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 30,
    color: "black",
    alignSelf: "flex-end",
    marginRight: 10,
    //test
    marginTop: 100,
  },
  icon: {
    paddingRight: 10,
  },
  info: {
    width: "10%",
    height: "100%",
    backgroundColor: "orangered",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
});
export default FieldAnimation;
