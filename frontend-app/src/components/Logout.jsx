import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authSlice';

const Logout = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        try {
            dispatch(logout());

        } catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <button onClick={handleLogout}> Salir de la sesión </button>
        </>
    )
}

export default Logout