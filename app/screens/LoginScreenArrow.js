import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  UIManager,
  LayoutAnimation,
  Text,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextInputArrow from "../components/TextInputArrow";
import ButtonArrow from "../components/ButtonArrow";
import style from "../config/style";
import { StatusBar } from "expo-status-bar";

function LoginScreenArrow() {
  const [keyboardShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setKeyboardShow(true);
  };

  const _keyboardDidHide = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setKeyboardShow(false);
  };
  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["rgba(0,0,0,.2)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 400,
        }}
      />
      <Image
        source={require("../assets/logo.png")}
        style={
          keyboardShow
            ? [styles.logo, { width: 150, height: 50, top: 40 }]
            : styles.logo
        }
      />
      <View
        style={
          keyboardShow
            ? [
                styles.box,
                { position: "absolute", top: "17%", zIndex: 1, height: "70%" },
              ]
            : styles.box
        }
      >
        <Text style={keyboardShow ? [styles.login, { top: 15 }] : styles.login}>
          ورود
        </Text>
        <Text
          style={
            keyboardShow ? [styles.register, { top: 15 }] : styles.register
          }
        >
          عضویت
        </Text>

        <TextInputArrow
          iconName="account"
          // name="نام و نام خانوادگی :"
          placeholder="نام و نام خانوادگی "
        />
        <TextInputArrow
          iconName="cellphone"
          // name=" شماره همراه :"
          placeholder="شماره همراه"
        />
        <TextInputArrow
          iconName="lock"
          // name="رمز ورود :"
          placeholder="رمز ورود"
        />
        <ButtonArrow
          style={
            keyboardShow
              ? [styles.button, { bottom: -60, width: 180, height: 80 }]
              : styles.button
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C86C01",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    position: "absolute",
    height: "60%",
    width: "95%",
    backgroundColor: "#fff",
    borderRadius: 40,
    elevation: 30,
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    alignSelf: "center",
    bottom: -65,
  },
  // login: {
  //   fontSize: 20,
  //   color: "#000",
  //   position: "absolute",
  //   top: 20,
  //   right: 30,
  // },
  login: {
    fontSize: 24,
    color: "#000",
    position: "absolute",
    top: 30,
    right: 30,
  },
  // register: {
  //   fontSize: 24,
  //   color: "#000",
  //   position: "absolute",
  //   top: 20,
  //   left: 30,
  //   borderBottomWidth: 3,
  //   borderBottomColor: "green",
  // },
  register: {
    fontSize: 24,
    color: "#000",
    position: "absolute",
    top: 30,
    left: 30,
    borderBottomWidth: 3,
    borderBottomColor: "blue",
  },
  logo: {
    width: 250,
    height: 100,
    position: "absolute",
    top: 55,
  },
});
export default LoginScreenArrow;
