import { useCallback } from 'react';
import NavigationPill from './navigation-pill';
import PropTypes from 'prop-types';

const TopNavBar = ({ menu }) => {
  const onNavigationPillContainerClick = useCallback(() => {
    // have to sync "Portfolio" to the project
  }, []);

  return (
    <div
      className={`rounded-11xl bg-white flex flex-row items-start justify-start p-[0.375rem] gap-[0.25rem] text-left text-[1.25rem] text-text-default-default font-plus-jakarta-sans mq1325:hidden`}
    >
      <NavigationPill
        title='Home'
        propPadding='0.75rem 2.5rem'
        propMinWidth='3.688rem'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/'}
        isActive={menu === 'Home'}
      />
      <NavigationPill
        title='Work'
        propPadding='0.75rem 2.75rem'
        propMinWidth='3.188rem'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/work'}
        isActive={menu === 'Work'}
      />
      <NavigationPill
        title='Services'
        propPadding='0.75rem 1.75rem'
        propMinWidth='5.188rem'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/services'}
        isActive={menu === 'Services'}
      />
      <NavigationPill
        title='Blog'
        propPadding='0.75rem 2.937rem'
        propMinWidth='2.813rem'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/blog'}
        isActive={menu === 'Blog'}
      />
      <NavigationPill
        title='About'
        propPadding='0.75rem 2.937rem'
        propMinWidth='2.813rem'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/about'}
        isActive={menu === 'About'}
      />
    </div>
  );
};

TopNavBar.propTypes = {
  menu: PropTypes.string.isRequired,
};

export default TopNavBar;
