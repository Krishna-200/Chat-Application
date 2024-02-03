import { useContext } from "react";
import { UserContext } from "./components/UserContext";
import Register from "./components/Register";

export default function Routes() {
  const { username, id } = useContext(UserContext);
  if (username) return "logged in " + username;
  return <Register />;
}
