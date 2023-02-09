import { useSelector } from 'react-redux';
import {
  selectAuthError,
  selectAuthIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const authIsLoading = useSelector(selectAuthIsLoading);
  const authError = useSelector(selectAuthError);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    authError,
    authIsLoading,
  };
};
