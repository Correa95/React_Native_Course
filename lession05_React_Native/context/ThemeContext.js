import { Children, createContext, useState } from "react";
import { Appearance } from "react-native";
import { colors } from "../constants/theme";

const ThemeContext = createContext({});
const ThemeProvider = ({ Children }) => {
  const [colorScheme, , setColorScheme] = useState(Appearance.getColorScheme());
  const theme = colorScheme === "dark" ? colors.dark : colors.light;
  return (
    <ThemeContext.Provider value={{ theme, setColorScheme, colorScheme }}>
      {Children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
