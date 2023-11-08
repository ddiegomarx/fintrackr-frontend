import React from "react";
import { userService } from "../../services/UserService";

function DeleteUser({ userId, onUserDeleted }) {
  const handleDelete = async () => {
    try {
      await userService.deleteUser(userId);
      onUserDeleted(userId); // Função callback para atualizar a lista de usuários
    } catch (error) {
      console.error(error); // Ou lidar com o erro como preferir
    }
  };

  return <button onClick={handleDelete}>Delete User</button>;
}

export default DeleteUser;
