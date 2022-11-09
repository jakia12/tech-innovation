import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthState } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {

    const location = useLocation();

    const { user, loading } = AuthState();

    if (loading) {
        return <div className="text-center py-10">

            loading...
        </div>
    }


    //check if user not logged in or not
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
}

export default PrivateRoute
