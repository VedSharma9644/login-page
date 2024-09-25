import React from 'react';
import { useAuth } from './AuthContext';

const Logout = () => {
    const { dispatch } = useAuth();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
