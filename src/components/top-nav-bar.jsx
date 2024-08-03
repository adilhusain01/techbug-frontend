import { useCallback } from 'react';
import NavigationPill from './navigation-pill';
import PropTypes from 'prop-types';

const TopNavBar = ({ menu, theme }) => {
  const onNavigationPillContainerClick = useCallback(() => {
    // have to sync "Portfolio" to the project
  }, []);

  return (
    <div
      className={`rounded-11xl  flex flex-row items-start justify-start p-[0.375rem] gap-[0.25rem] text-left text-[1.25rem]  font-plus-jakarta-sans mq1325:hidden`}
      style={{
        backgroundColor: theme.menuBg,
      }}
    >
      <NavigationPill
        title='Home'
        propPadding='0.75rem 2.5rem'
        propMinWidth='3.688rem'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/'}
        isActive={menu === 'Home'}
        theme={theme}
      />
      <NavigationPill
        title='Work'
        propPadding='0.75rem 2.75rem'
        propMinWidth='3.188rem'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/work'}
        isActive={menu === 'Work'}
        theme={theme}
      />
      <NavigationPill
        title='Services'
        propPadding='0.75rem 1.75rem'
        propMinWidth='5.188rem'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/services'}
        isActive={menu === 'Services'}
        theme={theme}
      />
      <NavigationPill
        title='Blog'
        propPadding='0.75rem 2.937rem'
        propMinWidth='2.813rem'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/blog'}
        isActive={menu === 'Blog'}
        theme={theme}
      />
      <NavigationPill
        title='About'
        propPadding='0.75rem 2.937rem'
        propMinWidth='2.813rem'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/about'}
        isActive={menu === 'About'}
        theme={theme}
      />
    </div>
  );
};

TopNavBar.propTypes = {
  menu: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default TopNavBar;
