import { Navigate, Outlet } from 'react-router';
import type { AppContainer } from '@/di/AppContainer';

type ProtectedRouteProps = {
  appContainer: AppContainer;
};

export function ProtectedRoute({ appContainer }: ProtectedRouteProps) {
  const userQuery = appContainer.getUserRepository().useUser();

  if (userQuery.isPending) {
    return <div>Проверяем авторизацию...</div>;
  }

  if (userQuery.isError || !userQuery.data) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
