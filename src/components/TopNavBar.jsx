import { useCallback } from 'react';
import NavigationPill from './NavigationPill';
import PropTypes from 'prop-types';

const TopNavBar = ({ menu, theme }) => {
  const onNavigationPillContainerClick = useCallback(() => {
    // have to sync "Portfolio" to the project
  }, []);

  return (
    <div
      className={`rounded-11xl flex flex-row items-start justify-start p-[0.375rem] gap-[0.25rem] text-left text-[1.25rem] font-plus-jakarta-sans`}
      style={{
        backgroundColor: theme.menuBg,
      }}
    >
      <NavigationPill
        title='Home'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/'}
        isActive={menu === 'Home'}
        theme={theme}
      />
      <NavigationPill
        title='Work'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/work'}
        isActive={menu === 'Work'}
        theme={theme}
      />
      <NavigationPill
        title='Services'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/services'}
        isActive={menu === 'Services'}
        theme={theme}
      />
      <NavigationPill
        title='Blog'
        onNavigationPillContainerClick={onNavigationPillContainerClick}
        to={'/blog'}
        isActive={menu === 'Blog'}
        theme={theme}
      />
      <NavigationPill
        title='About'
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
