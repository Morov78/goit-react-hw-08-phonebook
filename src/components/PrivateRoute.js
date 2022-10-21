import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogged, isRefreshing } = useAuth();
  const shouldRedirect = !isLogged && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
