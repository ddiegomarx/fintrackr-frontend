import React, { useEffect, useState } from "react";
import userService from "../../services/userService";

// Um componente de exemplo que lista os usuários
function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await userService.getUsers();
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.username} - {user.email}
          </p>
          {/* ...outras ações como editar e deletar */}
        </div>
      ))}
    </div>
  );
}

export default UsersList;
