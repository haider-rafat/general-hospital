import React, { useState } from 'react';
import useFirebase from '../hooks/useFirebase';
import { AuthContext } from './context';




const AuthProvider = ({ children }) => {
    const allContext = useFirebase();

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <AuthContext.Provider value={{
            userAuthentication: [isLoggedIn, setIsLoggedIn],
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;