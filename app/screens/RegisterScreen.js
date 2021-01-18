import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import LoginButton from "../components/LoginButton";
import { Formik, FormField } from "../components/forms";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import useLoginAnimation from "../hooks/useLoginAnimation";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("نام الزامیست").min(3, "حداقل 3 کارکتر"),
  mobile: Yup.number().required("شماره همراه الزامیست"),
  password: Yup.string().required("پسورد الزامیست"),
});

function RegisterScreen(props) {
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
              ? [styles.image, { width: 50, height: 50, top: "5%" }]
              : styles.image
          }
        />
      </View>
      <View style={styles.bottom} />
      <View
        style={
          keyboardShow
            ? [styles.box, { height: "75%", top: "15%" }]
            : styles.box
        }
      >
        <View
          style={
            keyboardShow
              ? [styles.row, { top: "5%", marginBottom: "5%" }]
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
          initialValues={{ name: "", mobile: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <FormField name="name" icon="account" placeholder="نام" />
          <FormField
            name="mobile"
            icon="cellphone-iphone"
            placeholder="شماره همراه"
            keyboardType="numeric"
          />
          <FormField name="password" icon="lock" placeholder="رمز ورود" />
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
    height: "55%",
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

export default RegisterScreen;
