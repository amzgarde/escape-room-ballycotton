import React, { useState } from "react";

const Login = ({ setLoggedIn }: { setLoggedIn: (l: boolean) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onButtonClick = () => {
    if (username === "captain" && password === "1234") {
      setLoggedIn(true);
    } else {
      setError("Incorrect!! Please try again!");
    }

    localStorage.setItem("user", JSON.stringify({ username: username }));
    setLoggedIn(true);
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={username}
          placeholder="Enter your email here"
          onChange={(ev) => setUsername(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Login;
