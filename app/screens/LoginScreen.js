import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { FormField, Formik } from "../components/forms";
import LoginButton from "../components/LoginButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import useLoginAnimation from "../hooks/useLoginAnimation";

const schema = Yup.object().shape({
  mobile: Yup.number().required("شماره موبایل الزامیست").max(11),
  password: Yup.string()
    .required("رمز عبور الزامیست")
    .max(20, "حداکثر 20 کارکتر مجاز میباشد"),
});

function LoginScreen() {
  const {
    keyboardShow,
    setLayoutAnimationEnabledExperimental,
  } = useLoginAnimation();
  setLayoutAnimationEnabledExperimental();

  return (
    <Screen style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../assets/logo-red.png")}
          style={
            keyboardShow
              ? [styles.image, { width: 60, height: 60, top: "10%" }]
              : styles.image
          }
        />
      </View>
      <View style={styles.bottom} />
      <View
        style={
          keyboardShow
            ? [styles.box, { height: "65%", top: "20%" }]
            : styles.box
        }
      >
        <View
          style={
            keyboardShow
              ? [styles.row, { top: "5%", marginBottom: "10%" }]
              : styles.row
          }
        >
          <View style={styles.login}>
            <AppText>ورود</AppText>
          </View>
          <View style={styles.register}>
            <AppText>ثبت نام</AppText>
          </View>
        </View>
        <Formik
          initialValues={{ mobile: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={schema}
        >
          <FormField
            icon="cellphone-iphone"
            placeholder="شماره همراه"
            keyboardType="numeric"
            maxLength={11}
            name="mobile"
          />
          <FormField
            icon="lock"
            placeholder="رمز ورود"
            maxLength={20}
            secureTextEntry
            name="password"
          />
          <LoginButton style={styles.button} />
        </Formik>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: "40%",
    width: "100%",
    backgroundColor: "#19376B",
  },
  bottom: {
    width: "100%",
    height: "60%",
    backgroundColor: "#E9F0F6",
  },
  box: {
    width: "95%",
    height: "50%",
    position: "absolute",
    backgroundColor: colors.white,
    zIndex: 1,
    alignSelf: "center",
    borderRadius: 20,
    elevation: 20,
    top: "20%",
  },
  button: {
    position: "absolute",
    top: "85%",
    alignSelf: "center",
  },
  row: {
    flexDirection: "row-reverse",
    top: "10%",
    justifyContent: "space-around",
    marginBottom: "15%",
  },
  login: {
    borderBottomWidth: 5,
    borderColor: "#E9ECF0",
    paddingHorizontal: 10,
  },
  register: {
    borderBottomWidth: 5,
    borderColor: "#E9ECF0",
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    position: "absolute",
    top: "10%",
  },
});

export default LoginScreen;
