// este es un custom hook (para este caso pudo quedarse todo en el componoente UserList pero preferí mostrar el uso de custom hooks)
import axios from 'axios'
import { useState, useEffect } from 'react' 

export const useFetch = (url) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch_users = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setUsers(response.data);

            } catch (error) {
                setError(error.message);

            } finally{
                setLoading(false);
            }
        }
        fetch_users();
        
    }, []);

    return {
        users,
        loading,
        error
    }
}