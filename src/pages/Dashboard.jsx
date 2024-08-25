import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMain from '../components/DashboardMain';
import useLogout from '../hooks/useLogout';

//icons
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Dashboard() {
  const navigate = useNavigate();
  const logout = useLogout();
  const [activeButton, setActiveButton] = useState('Blog');

  const signOut = async () => {
    await logout();
    navigate('/dashboard');
  };

  const buttons = [
    { name: 'Dashboard', icon: <GridViewIcon fontSize='small' /> },
    { name: 'Users', icon: <PersonIcon fontSize='small' /> },
    { name: 'Work', icon: <CalendarTodayIcon fontSize='small' /> },
    { name: 'Services', icon: <BusinessCenterIcon fontSize='small' /> },
    { name: 'Blog', icon: <NoteAltIcon fontSize='small' /> },
  ];

  return (
    <main className='w-full h-screen max-w-full grid grid-cols-12 font-plus-jakarta-sans'>
      <section className='w-full col-span-2 flex flex-col items-center justify-between'>
        <div className='w-full flex flex-col'>
          <div className='w-full m-0 px-[2.5rem] py-[2rem] box-border'>
            <img
              className='h-auto w-full max-w-[10rem] object-cover'
              src='https://res.cloudinary.com/djxuqljgr/image/upload/f_auto,q_auto/zuqbajuyhavubnv8l7le'
              alt='logo'
            />
          </div>

          <div className='flex p-0 flex-col mt-[2.5rem]'>
            {buttons.map((button) => (
              <button
                key={button.name}
                className={`w-full flex flex-row items-center justify-start gap-[1rem] hover:bg-[#FF6E1F] transition-all duration-300 px-[2.5rem] py-[1.5rem] ${
                  activeButton === button.name ? 'bg-[#FF6E1F]' : 'bg-white'
                }`}
                onClick={() => setActiveButton(button.name)}
              >
                {button.icon}
                <h2 className='font-normal'>{button.name}</h2>
              </button>
            ))}
          </div>
        </div>

        <button
          className='w-full flex flex-row items-center justify-start gap-[1rem] bg-white transition-all duration-300 px-[2.5rem] py-[1.5rem]'
          onClick={signOut}
          style={{ cursor: 'pointer' }}
        >
          <ExitToAppIcon fontSize='small' />
          <h2 className='font-normal'>Logout</h2>
        </button>
      </section>

      <DashboardMain activeView={activeButton} />
    </main>
  );
}

export default Dashboard;
