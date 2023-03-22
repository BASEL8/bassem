/* eslint-disable import/no-unresolved */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Home = lazy(() => import('pages/home/Home'));
const About = lazy(() => import('pages/about/About'));
const Projects = lazy(() => import('pages/Projects'));
const Store = lazy(() => import('pages/Store'));
const HireMe = lazy(() => import('pages/HireMe'));

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/projects',
    component: Projects,
  },
  {
    path: '/store',
    component: Store,
  },
  {
    path: '/hire-me',
    component: HireMe,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
