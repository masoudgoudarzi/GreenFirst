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
  Animated,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ShowNumberScreen from "./app/screens/ShowNumberScreen";
const DATA = [
  { id: 1, title: "first item" },
  { id: 2, title: "second item" },
  { id: 3, title: "third item" },
  { id: 4, title: "fourth item" },
  { id: 5, title: "fifth item" },
  { id: 6, title: "sixth item" },
  { id: 7, title: "seventh item" },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const scaleIndex = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnimation, {
      toValue: scaleIndex,
      useNativeDriver: true,
    }).start();
  });
  return (
    <>
      <View style={styles.container}>
        <View style={{ backgroundColor: "blue", width: 300 }} />
        <FlatList
          CellRendererComponent={({
            item,
            index,
            children,
            style,
            ...otherProps
          }) => {
            return (
              <View index={index} style={style} {...otherProps}>
                {children}
              </View>
            );
          }}
          horizontal
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          renderItem={({ item, index }) => {
            const inputRange = [index - 1, index, index + 1];
            const scale = scaleAnimation.interpolate({
              inputRange,
              outputRange: [0.8, 1.5, 0.8],
              extrapolate: "clamp",
            });
            const opacity = scaleAnimation.interpolate({
              inputRange,
              outputRange: [0.8, 1, 0.8],
            });

            return (
              <Animated.View
                key={item.id}
                style={{
                  // backgroundColor: "white",
                  padding: 10,
                  borderWidth: 2,
                  borderColor: "#0c0c0c",
                  transform: [{ scale }],
                  opacity,
                }}
              >
                <Animated.Text
                  style={{ fontSize: 30, color: "#0c0c0c", elevation: 2 }}
                >
                  {item.id}
                </Animated.Text>
              </Animated.View>
            );
          }}
        />
      </View>
      <Button
        title="click"
        onPress={() => {
          setIndex(index + 1),
            scaleIndex.setValue(index + 1),
            console.log("press");
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#0c0c0c",
    backgroundColor: "white",
  },
});
