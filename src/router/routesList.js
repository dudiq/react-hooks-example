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
  {
    path: '/signup',
    component: () => import('./SignUpPage'),
  },
];

export { routesList };
