import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Login from './Login';
import Home from './Home'
import Header from '../component/Header';
import Container from '../component/Container';

function App() {
  const {isAuth} = useTypedSelector(state => state.user)

  return (
    <>
      <Header/>
      <Container>
      <Routes>
        {isAuth ? (
          <>
          <Route  path='/home' element={<Home/>} />
          <Route path="*" element={<Navigate to="/home" replace />} />

          </>
        ) : (
          <>
            <Route path='/login' element={<Login/>} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </Container>

    </>
  );
}

export default App;
