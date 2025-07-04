import './App.css'
import UserList from './components/UserList'
import Login from './components/Login'
import { useSelector } from 'react-redux';
import Logout from './components/Logout';

function App() {

  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <>
      <h1>Sitio principal</h1>

      {
        isAuthenticated ? (
          <>
            <Logout />
            <UserList />
          </>
        ) : (
          <Login is_auth={isAuthenticated}/>
        )
      }
      
    </>
  )
}

export default App
