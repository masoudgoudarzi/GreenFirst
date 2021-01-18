import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ButtonSlide from "../components/ButtonSlide";
import AppTextInput from "../components/TextInputSlide";

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View
        // source={require("../assets/gal-3.jpeg")}
        style={styles.img}
        // blurRadius={2}
      >
        <Image
          source={require("../assets/favicon1.png")}
          style={styles.logoo}
        />
        <View style={styles.box}>
          <Text style={styles.text}> ثبت نام </Text>
          <AppTextInput
            icon="account-outline"
            name="نام و نام خانوادگی :"
            placeholder="حسن"
          />
          <AppTextInput
            icon="cellphone"
            name="شماره همراه :"
            placeholder="09123456789"
          />
          <AppTextInput icon="lock" name="رمز عبور" placeholder="*******" />
          <ButtonSlide />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#7369CF",
  },
  logoo: {
    width: "40%",
    height: "15%",
    alignSelf: "center",
    marginBottom: "20%",
  },
  box: {
    backgroundColor: "#fff",
    width: "100%",
    height: "70%",
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#cba697",
  },
  text: {
    fontSize: 40,
    marginBottom: 20,
  },
});
export default LoginScreen;
