import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";

import colors from "../config/colors";
import defaulStyle from "../config/style";
import { Entypo } from "@expo/vector-icons";
import useLoginAnimation from "../hooks/useLoginAnimation";

const categories = [
  { id: 1, title: "آپارتمان" },
  { id: 2, title: "ویلایی" },
  { id: 3, title: "رهن" },
  { id: 4, title: "اجاره" },
  { id: 5, title: "خرید" },
  { id: 6, title: "فروش" },
];

function CategoryScreen(props) {
  const scrollView = useRef();
  const [selectedCategory, setSelectedCategory] = useState([]);
  const { setLayoutAnimationEnabledExperimental } = useLoginAnimation();
  setLayoutAnimationEnabledExperimental();

  const handleSelect = (category) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (!selectedCategory.some((cat) => cat.id === category.id)) {
      selectedCategory.push(category);
      setSelectedCategory([...selectedCategory]);
    }
    return selectedCategory;
  };

  const handleRemove = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSelectedCategory([]);
  };

  useEffect(() => {
    console.log("call the backend");
  }, [selectedCategory]);

  return (
    <>
      <View>
        <ScrollView
          horizontal
          ref={scrollView}
          onContentSizeChange={() => scrollView.current.scrollToEnd()}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.box}>
            {categories.map((category) => (
              <TouchableOpacity
                onPress={() => handleSelect(category)}
                key={category.id}
              >
                <View key={category.id} style={[styles.category]}>
                  <Text style={defaulStyle.text}>{category.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "blue",
          marginVertical: 3,
        }}
      />
      {selectedCategory.length > 0 && (
        <View style={styles.selectBox}>
          <TouchableOpacity onPress={handleRemove}>
            <Entypo name="circle-with-cross" size={40} color={colors.dark} />
          </TouchableOpacity>
          {selectedCategory.length > 0 &&
            selectedCategory.map((item) => (
              <View key={item.title} style={styles.categorySelect}>
                <Text style={defaulStyle.text}>{item.title}</Text>
              </View>
            ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 100,
    flexDirection: "row-reverse",
    height: 40,
  },
  category: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#90b0cb",
    elevation: 1,
    padding: 5,
    minWidth: 80,
    height: 30,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  categorySelect: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "blue",
    padding: 5,
    minWidth: 70,
    height: 30,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  selectBox: {
    height: 30,
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
});

export default CategoryScreen;
