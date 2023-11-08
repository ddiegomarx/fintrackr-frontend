import React, { useState, useEffect } from 'react';
import { userService } from '../../services/UserService';

function UpdateUser({ userId }) {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    });

    useEffect(() => {
        // Fetch the user details from the API
        const fetchUser = async () => {
            try {
                const response = await userService.getUserById(userId);
                setUser(response.data); // Ajuste de acordo com a resposta da sua API
            } catch (error) {
                console.error(error); // Ou lidar com o erro como preferir
            }
        };

        fetchUser();
    }, [userId]);

    const handleChange = (e) => {
