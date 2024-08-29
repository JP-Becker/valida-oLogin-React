import './App.css';
import { ProtectedLayout } from './components/ProtectedLayout';
import { AuthProvider } from './context/AuthProvider';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // englobando toda a aplicação com o AuthProvider 
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path ='/profile'>
            <ProtectedLayout>
              <h2>Componente profile</h2>
            </ProtectedLayout>
          </Route>
          <Route path ='/login'>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
