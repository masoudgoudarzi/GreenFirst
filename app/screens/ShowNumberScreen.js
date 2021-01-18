import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Animated } from "react-native";

const DATA = [
  { id: 1, title: "first item" },
  { id: 2, title: "second item" },
  { id: 3, title: "third item" },
  { id: 4, title: "fourth item" },
  { id: 5, title: "fifth item" },
  { id: 6, title: "sixth item" },
  { id: 7, title: "seventh item" },
];

const ShowNumberScreen = () => {
  const scrollXAnimation = useRef(new Animated.Value(0)).current;
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const inputRange = [index - 1, index, index + 1];
  const translateX = scrollXAnimation.interpolate({
    inputRange,
    outputRange: [-50, 0, 50],
  });

  useEffect(() => {
    Animated.spring(scrollXAnimation, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });
  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.box, { transform: [{ translateX }] }]}>
          <View
            style={{
              width: 300,
              backgroundColor: "red",
            }}
          />
          {DATA.map((item, index) => {
            console.log("index", index);
            const inputRange = [index - 1, index, index + 1];

            const scale = scrollXAnimation.interpolate({
              inputRange,
              outputRange: [0.5, 1.5, 0.5],
            });

            return (
              <Animated.View
                key={item.id}
                style={{
                  backgroundColor: "#eee",
                  width: 50,
                  // borderWidth: 2,
                  // borderColor: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <Animated.Text style={{ fontSize: 30, transform: [{ scale }] }}>
                  {item.id}
                </Animated.Text>
              </Animated.View>
            );
          })}
        </Animated.View>

        <View style={styles.circle} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    backgroundColor: "lightblue",
    marginTop: 300,
    width: 150,
    overflow: "hidden",
  },
  box: {
    flexDirection: "row",
    padding: 10,
  },
  circle: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "black",
  },
});

export default ShowNumberScreen;
