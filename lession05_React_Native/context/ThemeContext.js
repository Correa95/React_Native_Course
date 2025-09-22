import { Children, createContext, useState } from "react";
import { Appearance } from "react-native";
import { colors } from "../constants/theme";

const ThemeContext = createContext({});
const ThemeProvider = ({ Children }) => {
  const [colorScheme, , setColorScheme] = useState(Appearance.getColorScheme());
};
