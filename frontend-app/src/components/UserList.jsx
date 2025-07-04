
import { useEffect, useState } from 'react';
import { useFetch } from '../Hooks/useFetch';

const UserList = () => {

    const {users, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users/');

    const [search_user, setSearchUser] = useState('');

    // Función para filtrar usuarios
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(search_user.toLowerCase())
    );

    if (loading) return <div>Cargando...</div>;
    if (error !== null) return <div>Error al cargar usuarios: {error}</div>;

    return(
        <div>
            <h1>Componente de Usuarios</h1>
            
            <input type='text' value={search_user} placeholder='Ecribir nombre' onChange={(e) => setSearchUser(e.target.value)} />
            <br/> <br/>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredUsers.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td> 
                                <td>{item.name}</td> 
                                <td>{item.email}</td> 
                                <td>{item.username}</td> 
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* Mensaje cuando no hay resultados */}
            {filteredUsers.length === 0 && search_user && (
                <p style={{ color: '#666', marginTop: '20px' }}>
                    No se encontraron usuarios con el nombre "{search_user}"
                </p>
            )}
        </div>
    )
}

export default UserList