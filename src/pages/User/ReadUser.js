import React, { useEffect, useState } from 'react';
import { userService } from '../../services/UserService';

function ReadUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userService.getUsers();
                setUsers(response.data); // Ajuste de acordo com a resposta da sua API
            } catch (error) {
                console.error(error); // Ou lidar com o erro como preferir
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <p>Username: {user.username}<
