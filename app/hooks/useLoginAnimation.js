import React, { useState, useEffect } from "react";
import { UIManager, LayoutAnimation, Platform, Keyboard } from "react-native";

function useLoginAnimation(props) {
  const [keyboardShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
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

  const setLayoutAnimationEnabledExperimental = () => {
    if (
      Platform.OS === "android" &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  };
  return { keyboardShow, setLayoutAnimationEnabledExperimental };
}

export default useLoginAnimation;
