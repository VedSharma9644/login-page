import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Dashboard = () => {
    const { state, dispatch } = useAuth();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <div className="container">
            <h2>Dashboard</h2>
            {state.isAuthenticated ? (
                <div>
                    <h3>Welcome back, {state.user.username}!</h3>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h3>You are not logged in.</h3>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
