import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './login';
import UserInfo from './UserInfo';
import Dashboard from './Dashboard';
import './App.css';


// NavBar Component
const NavBar = () => {
    const { state, dispatch } = useAuth();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <nav>
            <Link to="/">Dashboard</Link>
            {/* Show the Login link only if the user is not authenticated */}
            {!state.isAuthenticated ? (
                <Link to="/login">Login</Link>
            ) : (
                <button onClick={handleLogout}>Logout</button>
            )}
        </nav>
    );
};

// Main App Component
const App = () => {
    return (
        <AuthProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/userinfo" element={<UserInfo />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
