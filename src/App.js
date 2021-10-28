import "./App.scss";
import { CartProvider } from "./context/cartContext";
import { ThemeProvider } from "./context/themeContext";
import Routes from "./routes/Routes";
import { withTranslation } from "react-i18next";
function App({t,i18n}) {
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <button onClick={()=>{
        handleChangeLanguage("tr");
      }}>tr</button>
      <button onClick={()=>{
        handleChangeLanguage("en");
      }}>en</button>
      <ThemeProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default withTranslation()(App) ;
