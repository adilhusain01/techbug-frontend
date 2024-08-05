import React, { useEffect, lazy, Suspense } from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import LoadingSpinner from '../src/components/loading-spinner';
import BlogPost from './pages/BlogPost';

const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const About = lazy(() => import('./pages/About'));

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
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = 'Home';
        metaDescription = 'Welcome to the Home page';
        break;
      case '/work':
        title = 'Work';
        metaDescription = 'Our Work';
        break;
      case '/services':
        title = 'Services';
        metaDescription = 'Our Services';
        break;
      case '/blog':
        title = 'Blog';
        metaDescription = 'Our Blog';
        break;
      case '/about':
        title = 'About';
        metaDescription = 'About Us';
        break;
      default:
        title = 'Website';
        metaDescription = 'Website Description';
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Suspense>
  );
}

export default App;
