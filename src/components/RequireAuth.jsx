import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  // console.log('auth:', auth);

  const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;

  // console.log('decoded:', decoded);

  const roles = decoded?.userInfo?.roles || [];
  // console.log('roles:', roles);

  return roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

RequireAuth.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.number),
};

export default RequireAuth;
