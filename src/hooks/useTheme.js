import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

//custom hook for context
export default function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return { theme, setTheme };
}
