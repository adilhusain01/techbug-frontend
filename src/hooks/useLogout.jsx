import axios from '../api/axios';
import useAuth from './useAuth';

function useLogout() {
  const { setAuth } = useAuth();

  const logout = async () => {
    try {
      setAuth({});
      await axios.get('/auth/logout', {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
}

export default useLogout;
