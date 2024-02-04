import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register");

  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    // console.log(isLoginOrRegister);
    const { data } = await axios.post(url, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
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
        <button>
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </button>
      </form>
      {isLoginOrRegister === "register" && (
        <div>
          Already have an account?{" "}
          <button onClick={() => setIsLoginOrRegister("login")}>
            Login here
          </button>
        </div>
      )}
      {isLoginOrRegister === "login" && (
        <div>
          New to this ?{" "}
          <button onClick={() => setIsLoginOrRegister("register")}>
            Register here
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;
