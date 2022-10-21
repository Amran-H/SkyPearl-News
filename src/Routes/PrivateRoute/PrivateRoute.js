import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';


//1. Only allow authenticated user to visit the route
// 2. reloading to login page solved
// 3. Redirect the user to the route where they wanted to before login


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>

    }
    return children;
};

export default PrivateRoute;