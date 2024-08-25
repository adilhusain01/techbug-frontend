import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { TextField, Button } from '@mui/material';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { setAuth } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/auth/login',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      const data = jwtDecode(accessToken);

      const roles = data?.userInfo?.roles;
      const id = data?.userInfo?.userId;

      setAuth({
        email: email,
        id: id,
        accessToken: accessToken,
        roles: roles,
      });

      setEmail('');
      setPassword('');
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className='w-full h-screen font-plus-jakarta-sans flex items-center justify-center bg-[#F5F5F5]'>
      <div className='p-[5rem] flex flex-col items-center justify-center max-w-[30rem] h-auto gap-[2.5rem] bg-white rounded-lg shadow-lg box-border'>
        <div className='m-0 box-border px-[3rem]'>
          <img
            className='w-full h-auto object-cover'
            src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/zuqbajuyhavubnv8l7le'
            alt='logo'
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-[1rem] w-full'
        >
          <TextField
            id='outlined-email-input'
            label='Email'
            type='email'
            autoComplete='off'
            onChange={() => setEmail(event.target.value)}
          />
          <TextField
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete='off'
            onChange={() => setPassword(event.target.value)}
          />
          <Button type='submit' variant='contained' color='warning'>
            Log In
          </Button>
        </form>
      </div>

      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce}
      />
    </section>
  );
}

export default Login;
