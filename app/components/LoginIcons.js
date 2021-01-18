import React from "react";
import { View, StyleSheet } from "react-native";

function LoginIcons() {
  return (
    <View style={styles.container}>
      <FontAwesome
        name="warning"
        size={40}
        color="orangered"
        style={styles.errorIcon}
      />
      <MaterialIcons name="verified-user" size={40} color="green" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default LoginIcons;
