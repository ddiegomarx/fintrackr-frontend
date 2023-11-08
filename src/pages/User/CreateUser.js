import React, { useState } from "react";
import { userService } from "../../services/UserService";

function CreateUser() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.createUser(user);
      console.log(response); // Ou lidar com o sucesso como preferir
    } catch (error) {
      console.error(error); // Ou lidar com o erro como preferir
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Create User</button>
    </form>
  );
}

export default CreateUser;
