import './App.css';
import { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/dashboard/Home';
import { v4 } from 'uuid';
import { ProtectedRoute, routes } from './routes/routes';
import { Loader } from './components';
import NotFound from './pages/notfound/NotFound';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={v4()} />
          ))}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
