import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
const HomePage = lazy(() => import('../pages/dashboard/Home'));
const SignIn = lazy(() => import('../pages/auth/signin/SignIn'));
const SignUp = lazy(() => import('../pages/auth/signup/SignUp'));

const isAuthenticated = () => {
  return true;
};

export const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
  if (isAuthenticated()) {
    return <>{children}</>;
  }

  window.location.replace('/signup');
  return null;
};

export const routes: IRoute[] = [
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
