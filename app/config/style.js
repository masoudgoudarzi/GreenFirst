import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        color: colors.dark,
        paddingRight: 5,
      },
      android: {
        fontSize: 20,
        color: colors.dark,
        paddingRight: 5,
      },
    }),
  },
};
