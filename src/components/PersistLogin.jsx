import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';
import useLocalStorage from '../hooks/useLocalStorage';

export default function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const [persist] = useLocalStorage('persist', true); //default true for now

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, []);

  return (
    <section>
      {!persist ? (
        <Outlet />
      ) : isLoading ? (
        <section className='flex items-center justify-center w-full h-screen'>
          <div className='dot-spinner'>
            <div className='dot-spinner__dot'></div>
            <div className='dot-spinner__dot'></div>
            <div className='dot-spinner__dot'></div>
            <div className='dot-spinner__dot'></div>
            <div className='dot-spinner__dot'></div>
            <div className='dot-spinner__dot'></div>
            <div className='dot-spinner__dot'></div>
            <div className='dot-spinner__dot'></div>
          </div>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
}
