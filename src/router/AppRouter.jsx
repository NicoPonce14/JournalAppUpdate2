
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {
 const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth/>
  }
  
  return (

    <Routes>
      {
        (status === 'authenticated')
        ?<Route path="/*" element={<JournalRoutes/>}/> //ruta del main de la app
        : <Route path="/auth/*" element={<AuthRoutes/>}/> //ruta del login que se sale si no esta autenticado el user
        
      }

      <Route path='/*' element={<Navigate to='/auth/login' />}/>

    </Routes>
  )
}
