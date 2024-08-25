import { lazy, useEffect, useState } from 'react';
import axios from '../../api/axios';
import UserConfirmationModal from './UserConfirmationModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const UserEditor = lazy(() => import('./UserEditor'));
import { Bounce, toast, ToastContainer } from 'react-toastify';

const getHighestPrivilege = (roles) => {
  if (roles.Admin) return 'Admin';
  if (roles.Manager) return 'Manager';
  if (roles.Editor) return 'Editor';
  return null;
};

function UsersView() {
  const [isEditing, setIsEditing] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [usersMeta, setUsersMeta] = useState([]);

  const getUsersMeta = async () => {
    try {
      const response = await axios.get('/users/meta');
      setUsersMeta(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async (id) => {
    try {
      const response = await axios.get(`/users/${id}`);
      const data = response.data;
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersMeta();
  }, []);

  const handleOpen = (user) => {
    setUserToDelete(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserToDelete(null);
  };

  const deleteUser = async () => {
    if (!userToDelete) return;

    try {
      await axios.delete(`/users/${userToDelete._id}`);
      setUsersMeta(usersMeta.filter((user) => user._id !== userToDelete._id));
      handleClose();
      toast.success('User deleted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    getUser(id);
    setIsEditing(true);
  };

  return isEditing ? (
    <UserEditor user={userData} />
  ) : (
    <section
      className='w-full max-w-full h-screen overflow-y-scroll box-border bg-[#F5F5F5]'
      style={{ scrollbarWidth: 'none' }}
    >
      <div className='flex flex-row items-center justify-between px-[2rem] py-[1rem] border-b border-solid'>
        <h2 className='m-0 p-0 font-normal'>Users</h2>
        <button
          className='text-white bg-[#FF6E1F] hover:bg-[#af5c24] transition-all duration-300 text-[1rem] p-[0.75rem] rounded-sm'
          onClick={() => setIsEditing(true)}
        >
          Add New User
        </button>
      </div>
      <div className='m-0 p-[2rem] max-w-full flex flex-col items-center justify-center gap-[1rem]'>
        <article className='m-0 p-[1rem] grid grid-cols-4 justify-items-center bg-[#FFE9DD] w-full box-border rounded-md'>
          <h2 className='m-0 text-[1.25rem] font-normal'>Name</h2>
          <h2 className='m-0 text-[1.25rem] font-normal'>Created On</h2>
          <h2 className='m-0 text-[1.25rem] font-normal'>Role</h2>
          <h2 className='m-0 text-[1.25rem] font-normal'>Action</h2>
        </article>
        {usersMeta.map((user) => {
          const highestPrivilege = getHighestPrivilege(user.roles);
          return (
            <article
              key={user._id}
              className='m-0 p-[1rem] grid grid-cols-4 bg-[#DDDDDD] w-full box-border rounded-md'
            >
              <span className='flex flex-col pl-[5rem] items-start justify-center'>
                <h2 className='m-0 text-[1.25rem] font-normal'>
                  {user.first_name + ' ' + user.last_name}
                </h2>
                <h3 className='m-0 text-[1rem] text-dimgray-100 font-normal'>
                  {user.email}
                </h3>
              </span>
              <h3 className='m-0 text-[1rem] font-normal text-center my-auto'>
                {new Date(user.createdAt).toLocaleString('en-UK', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })}
              </h3>
              <span className='flex items-center justify-center'>
                <h3
                  className={`m-0 text-[1rem] w-full font-normal py-[0.75rem] text-center rounded-md ${
                    highestPrivilege === 'Admin'
                      ? 'bg-[#FF6E1F]'
                      : 'bg-[#FFF1E9]'
                  }`}
                >
                  {highestPrivilege ? `${highestPrivilege}` : 'NA'}
                </h3>
              </span>
              <span className='flex flex-row items-center justify-center gap-[1rem]'>
                <EditIcon
                  fontSize='small'
                  onClick={() => handleEdit(user._id)}
                  className='cursor-pointer'
                />
                <DeleteIcon
                  fontSize='small'
                  onClick={() => handleOpen(user)}
                  className='cursor-pointer'
                />
              </span>
            </article>
          );
        })}
      </div>

      <UserConfirmationModal
        open={open}
        handleClose={handleClose}
        handleDelete={deleteUser}
        username={userToDelete?.username}
        mode={'delete'}
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

export default UsersView;
