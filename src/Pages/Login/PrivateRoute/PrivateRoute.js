import React, { useContext } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/context';



const PrivateRoute = ({ children, path }) => {
    const { userAuthentication } = useContext(AuthContext);
    const [isLoggedIn, _] = userAuthentication;
    return <Route path={path}>
        {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
};

export default PrivateRoute;