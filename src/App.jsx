import { Helmet } from 'react-helmet';
import React, { useEffect, lazy, Suspense } from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import ReactGA from 'react-ga4';
import LoadingSpinner from '../src/components/LoadingSpinner';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';

const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const About = lazy(() => import('./pages/About'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));

const ROLES = {
  Editor: 202530,
  Manager: 152025,
  Admin: 101520,
};

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <main className='w-full'>
      <Helmet>
        <title>Techbug</title>
        <meta
          name='description'
          content='At Techbug we provide Development, Marketing and Custom Services and Solutions'
        />
        <meta
          name='keywords'
          content='App Development, Web Development, Marketing, Digital Solutions, Web Development and Design, App Development and Design, Digital Marketing, Smart Business Card, Business Automation, Custom Service, Techbug'
        />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<BlogPost />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Route>
          <Route path='*' element={<div>Broken Link</div>} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
