import './App.scss';
import { CartProvider } from './context/cartContext';
import Routes from "./routes/Routes";

function App() {
  return (
    <div>
      <CartProvider>
      <Routes />
      </CartProvider>
    </div>
  );
}

export default App;
