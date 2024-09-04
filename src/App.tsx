import './App.css';
import { Login } from './components/Login';
import { ProtectedLayout } from './components/ProtectedLayout/protectedLayout';
import { AuthProvider } from './context/AuthProvider';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // englobando toda a aplicação com o AuthProvider 
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path ='/profile' element={<ProtectedLayout>
            <p>Componente profile</p>
          </ProtectedLayout>}>
            
          </Route>
          <Route path ='/login' element={<Login/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
