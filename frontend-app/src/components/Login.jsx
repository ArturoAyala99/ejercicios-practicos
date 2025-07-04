import { useDispatch, useSelector } from 'react-redux';
import { login, loginSuccess/*, loginFailure */} from '../redux/auth/authSlice';
import { useState } from 'react';

const Login = () => {

    const dispatch = useDispatch();

    const { error } = useSelector(state => state.auth);

    const [password, setPassword] = useState('');

    const FakeAuthAPI = (credentials) => {
        
        if (credentials === "1234") {
            return {
                user: { id: 1, name: "Usuario Demo", email: "test@test.com" },
                token: "fake-jwt-token"
            };
        } else {
            
            return {
                message_fail: 'Credenciales inválidas'
            };
        }
        
    };

    const handleLogin = () => {
        try {
            dispatch(login());

            const response = FakeAuthAPI(password);
            
            if (response.message_fail === undefined)
                dispatch(loginSuccess({
                    user: response.user,
                    token: response.token
                }));
            else{
                alert(response.message_fail);
            }
        } catch (error){
            alert(error); // manejar un error interno
        }
    }

    return (
        <div>
            <h2>Login de Prueba</h2>
            <p>Usa contraseña: <strong>1234</strong></p>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br/><br/>

            {error && <p>{error}</p>}
            <button onClick={handleLogin}> Iniciar Sesión </button>
        </div>
    )
}

export default Login