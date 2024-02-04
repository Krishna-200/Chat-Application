import { useContext } from "react";
import { UserContext } from "./components/UserContext";
import RegisterAndLoginForm from "./components/RegisterAndLoginForm";

export default function Routes() {
  const { username, id } = useContext(UserContext);
  if (username) return "logged in " + username;
  return <RegisterAndLoginForm />;
}
