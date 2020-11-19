const routesList = [
  {
    path: '/',
    exact: true,
    component: () => import('./Home'),
  },
  {
    path: '/about',
    component: () => import('./About'),
  },
];

export { routesList };
