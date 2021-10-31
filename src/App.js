import "./App.scss";
import { CartProvider } from "./context/cartContext";
import { ThemeProvider } from "./context/themeContext";
import Routes from "./routes/Routes";
function App() {
  return (
    // context providers
    <div>
      <ThemeProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
