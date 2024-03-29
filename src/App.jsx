import "./App.css";
import axios from "axios";
import { UserContextProvider } from "./components/UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
