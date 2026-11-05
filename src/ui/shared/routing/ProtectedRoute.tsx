import { Navigate, Outlet } from 'react-router';
import { useAppContainer } from '@/di/AppContainerContext';

export function ProtectedRoute() {
  const appContainer = useAppContainer();
  const userQuery = appContainer.getUserRepository().useUser();

  if (userQuery.isPending) {
    return <div>Проверяем авторизацию...</div>;
  }

  if (userQuery.isError || !userQuery.data) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}
