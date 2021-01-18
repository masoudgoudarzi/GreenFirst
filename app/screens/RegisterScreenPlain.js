import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import ButtonPlain from "../components/ButtonPlain";
import TextInputPlain from "../components/TextInputPlain";
import { Formik } from "formik";
import * as Yup from "yup";
import { enableScreens } from "react-native-screens";
enableScreens();

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .required("نام و نام خانوادگی خود را وارد کنید")
    .label("نام و نام خانوادگی"),
  phoneNumber: Yup.number().required("شماره موبایل خودرا وارد کنید"),
  password: Yup.string().required("رمز عبور خود را وارد کنید"),
});

function RegisterScreenPlain() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ name: "", phoneNumber: "", password: "" }}
        validationSchema={signupSchema}
        onSubmit={(values) => console.log("submit", values)}
      >
        {({ errors, touched, handleChange, handleSubmit }) => (
          <>
            <TextInputPlain
              label="نام و نام خانوادگی"
              placeholder="نام و نام خانوادگی"
              onChangeText={handleChange("name")}
              error={errors["name"]}
            />
            <TextInputPlain
              label="شماره موبایل"
              placeholder="شماره موبایل"
              onChangeText={handleChange("phoneNumber")}
              error={errors["phoneNumber"]}
            />
            <TextInputPlain
              label="رمز عبور"
              placeholder="رمز عبور"
              onChangeText={handleChange("password")}
              error={errors["password"]}
            />

            <ImageBackground style={styles.img} />
            <ButtonPlain onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: "50%",
    height: 80,
    alignSelf: "center",
  },
  img: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
});
export default RegisterScreenPlain;
