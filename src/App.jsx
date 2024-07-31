import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import Blog from './pages/Blog';
import About from './pages/About';

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
        title = '';
        metaDescription = '';
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
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/work' element={<Work />} />
      <Route path='/services' element={<Services />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
}
export default App;
