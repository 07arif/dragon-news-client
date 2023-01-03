import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return   <Spinner animation="border" variant="info" />
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoutes;