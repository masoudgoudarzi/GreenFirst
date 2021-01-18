import React, { useEffect, useRef, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  UIManager,
  View,
  Button,
  Image,
} from "react-native";
import {
  createSharedElementStackNavigator,
  SharedElement,
} from "react-navigation-shared-element";

import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
enableScreens();

const List = ({ navigation }) => (
  <TouchableWithoutFeedback onPress={() => navigation.navigate("Details")}>
    <View style={{ marginTop: 100 }}>
      <SharedElement id={1}>
        <Image
          source={require("./app/assets/gal-1-crop.jpg")}
          style={{ width: "100%", height: 300, resizeMode: "contain" }}
        />
      </SharedElement>
    </View>
  </TouchableWithoutFeedback>
);

const Details = () => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <SharedElement id={1}>
      <Image
        source={require("./app/assets/gal-1-crop.jpg")}
        style={{
          width: "90%",
          height: "90%",
          alignSelf: "center",
          resizeMode: "contain",
        }}
      />
    </SharedElement>
  </View>
);
// Details.sharedElements = (route, otherRoute, showing) => {
//   // const { item } = route.params;
//   return [{ id: 1, animation: "fade", resize: "clip" }];
// };

const Stack = createSharedElementStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="list" component={List} />
    <Stack.Screen
      name="Details"
      component={Details}
      sharedElementsConfig={(route, otherRoute, showing) => {
        return [
          {
            id: 1,
            animation: "fade",
          },
        ];
      }}
      options={() => ({
        gestureEnabled: false,
        transitionSpec: {
          open: { animation: "timing", config: { duration: 1000 } },
          close: { animation: "timing", config: { duration: 1000 } },
        },
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
