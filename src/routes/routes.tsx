import { lazy, useEffect } from 'react';
import { RouteProps } from 'react-router-dom';
import { IRoutes } from '../types/interfaces';
import axios from '../helpers/api';
import { makeSign } from '../helpers/makeSign';
const HomePage = lazy(() => import('../pages/dashboard/Home'));
const SignIn = lazy(() => import('../pages/auth/signin/SignIn'));
const SignUp = lazy(() => import('../pages/auth/signup/SignUp'));

const isAuthenticated = async (): Promise<boolean> => {
  const key = localStorage.getItem('key');

  if (!key) return false;
  try {
    const res = await axios.get('/myself', { headers: { Key: key, Sign: makeSign('/myself', 'GET') } });
    return res.data.isOk;
  } catch (error) {
    return false;
  }
};

export const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
  useEffect(() => {
    const checkAuth = async () => {
      if (!(await isAuthenticated())) {
        window.location.replace('/signup');
      }
    };

    checkAuth();
  }, []);

  return <>{children}</>;
};

export const routes: IRoutes[] = [
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
];
