import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Spinner from '../../../Shared/Spinner/Spinner'

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading) {
        return <Spinner/>
    }
    return (
        <>
           <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                    children
                    ) : (
                    <Redirect
                        to={{
                        pathname: "/login",
                        state: { from: location }
                        }}
                    />
                    )
                }
            />  
        </>
    );
};

export default PrivateRoute;