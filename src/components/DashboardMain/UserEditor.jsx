import { useEffect, useState, lazy } from 'react';
const Blog = lazy(() => import('./BlogView'));
import {
  InputLabel,
  MenuItem,
  TextField,
  Select,
  FormControl,
} from '@mui/material';
import axios from '../../api/axios';
const UserConfirmationModal = lazy(() => import('./UserConfirmationModal'));
import CircularProgress from '@mui/material/CircularProgress';
const UsersView = lazy(() => import('./UsersView'));
import { Bounce, toast, ToastContainer } from 'react-toastify';

function UserEditor({ user }) {
  const [isCancelled, setIsCancelled] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (user) {
      setFirstName(user.first_name || '');
      setLastName(user.last_name || '');
      setEmail(user.email || '');
      setPhone(user.phone || '');
      setUsername(user.username || '');
      setPassword('');
      setConfirmPassword('');

      if (user.roles) {
        if (user.roles.Admin) {
          setSelectedRole('Admin');
        } else if (user.roles.Manager) {
          setSelectedRole('Manager');
        } else if (user.roles.Editor) {
          setSelectedRole('Editor');
        }
      } else {
        setSelectedRole('');
      }
    }
  }, [user]);

  const validate = () => {
    const errors = [];
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
      errors.push('Invalid email format');
    if (!/^[0-9]{10}$/.test(phone)) errors.push('Invalid phone number');
    if (!/^[a-zA-Z0-9_]{3,16}$/.test(username)) errors.push('Invalid username');
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    )
      errors.push('Invalid password');
    if (confirmPassword !== password) errors.push('Passwords do not match');

    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !selectedRole ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      toast.error('All fields are required');
      return;
    }

    try {
      const response = user
        ? await axios.put(`/users/${user._id}`, {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            roles: selectedRole,
            username,
            password,
          })
        : await axios.post('/users', {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            roles: selectedRole,
            username,
            password,
          });

      if (response.status === 201 || 200) {
        setIsCancelled(true);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const discard = async () => {
    setIsCancelled(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return isCancelled ? (
    <UsersView />
  ) : (
    <section
      className='w-full max-w-full h-screen overflow-y-scroll box-border bg-[#F5F5F5] font-plus-jakarta-sans relative'
      style={{ scrollbarWidth: 'none' }}
    >
      <div className='flex flex-row items-center justify-between px-[2rem] py-[1rem] border-b border-solid'>
        <h2 className='m-0 p-0 font-normal'>New User</h2>

        <div className='flex flex-row gap-[0.5rem]'>
          <button
            className='text-white bg-[#FF6E1F] hover:bg-[#af5c24] transition-all duration-300 text-[1rem] p-[0.75rem] rounded-sm'
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Save'}
          </button>
          <button
            className='text-white bg-[#575757] hover:bg-[#272727] transition-all duration-300 text-[1rem] p-[0.75rem] rounded-sm'
            onClick={() => handleOpen()}
          >
            Cancel
          </button>
        </div>
      </div>

      <section className='p-[2rem] flex flex-col gap-[2rem]'>
        <div className='flex flex-col px-[2rem] py-[1rem] bg-white rounded-md gap-[1rem]'>
          <h3 className='m-0 font-normal'>Info</h3>
          <div className='m-0 grid grid-cols-2 gap-[1rem]'>
            <TextField
              required
              id='outlined-required-first-name'
              label='First Name'
              autoComplete='off'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              required
              id='outlined-required-last-name'
              label='Last Name'
              autoComplete='off'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className='m-0 grid grid-cols-3 gap-[1rem]'>
            <TextField
              required
              id='outlined-required-email'
              label='Email'
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id='outlined-required-phone'
              label='Mobile No.'
              autoComplete='off'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel id='select-role-label' htmlFor='select-role'>
                Role
              </InputLabel>
              <Select
                className='w-full'
                labelId='select-role-label'
                id='select-role'
                value={selectedRole}
                label='Role'
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <MenuItem value={'Editor'}>Editor</MenuItem>
                <MenuItem value={'Manager'}>Manager</MenuItem>
                <MenuItem value={'Admin'}>Admin</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='m-0 grid grid-cols-3 gap-[1rem]'>
            <TextField
              required
              id='outlined-required-username'
              label='Username'
              autoComplete='off'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              id='outlined-required-password'
              label='Password'
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              required
              id='outlined-required-confirm-password'
              label='Confirm Password'
              autoComplete='off'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
      </section>
      <UserConfirmationModal
        open={open}
        handleClose={handleClose}
        handleDiscard={discard}
      />

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

export default UserEditor;
