import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { routesList } from '@/router/routesList';
import Loader from '@/ui-kit/Loader';

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {routesList.map((route, index) => {
              const { component, ...etc } = route;
              const Cmp = lazy(component);
              // eslint-disable-next-line react/no-array-index-key
              return <Route key={index} {...etc} render={() => <Cmp />} />;
            })}
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
