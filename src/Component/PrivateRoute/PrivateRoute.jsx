import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loader} = useContext(AuthContext);
    console.log(user);

    if(loader){
        return <span className="loading loading-bars loading-lg"></span>
    }


    if(user.email){
        return children;
    }
    else return <Navigate to='/login' replace ></Navigate>
   
};

export default PrivateRoute;