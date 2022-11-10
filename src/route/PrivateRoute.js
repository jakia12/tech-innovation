import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthState } from '../context/AuthProvider';
import FadeLoader from "react-spinners/FadeLoader";

const PrivateRoute = ({ children }) => {

    const location = useLocation();

    const { user, loading } = AuthState();

    //spinner state
    let [color, setColor] = useState("#22A7F0");


    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };


    if (loading) {
        return (
            <section className="loading_spinner">
                <div className="container w-full mx-auto lg:max-w-6xl px-4 lg:px-6">
                    <div className={`text-center  sweet-loading ${(loading ? "block py-12" : "none")}`}>

                        <FadeLoader
                            color={color}
                            loading={loading}
                            cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                </div>
            </section>
        )
    }


    //check if user not logged in or not
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
}

export default PrivateRoute
