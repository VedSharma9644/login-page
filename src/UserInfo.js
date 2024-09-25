import React from 'react';
import { useAuth } from './AuthContext';
import Logout from './Logout';

const UserInfo = () => {
    const { state } = useAuth();

    return (
        <div className="container">
            {state.isAuthenticated ? (
                <div>
                    <h2>Welcome, {state.user.username}!</h2>
                    <Logout />
                </div>
            ) : (
                <h2>Please log in.</h2>
            )}
        </div>
    );
};

export default UserInfo;
