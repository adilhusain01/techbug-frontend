//views
import { lazy } from 'react';

const DashboardView = lazy(() =>
  import('../components/DashboardMain/DashboardView')
);
const BlogView = lazy(() => import('../components/DashboardMain/Blog'));
const ServicesView = lazy(() =>
  import('../components/DashboardMain/ServicesView')
);
const UsersView = lazy(() => import('../components/DashboardMain/UsersView'));
const WorkView = lazy(() => import('../components/DashboardMain/WorkView'));

function DashboardMain({ activeView }) {
  let ViewComponent;

  switch (activeView) {
    case 'Dashboard':
      ViewComponent = DashboardView;
      break;
    case 'Users':
      ViewComponent = UsersView;
      break;
    case 'Work':
      ViewComponent = WorkView;
      break;
    case 'Services':
      ViewComponent = ServicesView;
      break;
    case 'Blog':
      ViewComponent = BlogView;
      break;
    default:
      ViewComponent = () => <div>Select a view</div>;
  }

  return (
    <section className='w-full col-span-10'>
      <ViewComponent />
    </section>
  );
}

export default DashboardMain;
