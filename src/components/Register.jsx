import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

  async function register(ev) {
    ev.preventDefault();
    const { data } = await axios.post("/register", { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  }

  return (
    <div>
      <form action="" onSubmit={register}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
