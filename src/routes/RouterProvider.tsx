import { useRoutes } from 'react-router-dom';
import { useRoutesForRole } from './router-config';

export const RouterProvider = () => {
  const routesForRole = useRoutesForRole();
  const routes = useRoutes(routesForRole);

  return routes;
};

export default RouterProvider;
