import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

// Predetermined credentials
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
];

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useAuth();
    const navigate = useNavigate(); // Use useNavigate to programmatically navigate

    const handleLogin = () => {
        const user = users.find((user) => user.username === username && user.password === password);

        if (!user) {
            alert('Login failed! Invalid username or password.');
            return;
        }

        dispatch({ type: 'LOGIN', payload: { username } });
        setUsername('');
        setPassword('');
        
        // Redirect to the dashboard after successful login
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username"
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
