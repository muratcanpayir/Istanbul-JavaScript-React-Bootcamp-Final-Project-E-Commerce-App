import './App.scss';
import { UserProvider } from './context/cartContext';
import Routes from "./routes/Routes";

function App() {
  return (
    <div>
      <UserProvider>
      <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
