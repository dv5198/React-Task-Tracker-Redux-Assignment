import "../styles.css";
import React from "react";
import { TaskForm } from "./TaskForm";
import { useState } from "react";
export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/TaskForm");
  };
  return (
    <div className="login_form">
      <form ClassName="login" action="" onSubmit={onSubmit}>
        <h1>Task Tracker</h1>
        <input
          type="text"
          placeholder="Enter Name"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="user_password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
