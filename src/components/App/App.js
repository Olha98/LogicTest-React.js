import React, { Suspense } from 'react';
import {  Switch } from 'react-router-dom';
import { routes } from '../../assets/routes/routes';
import PrivateRoute from '../CustomRoutes/PrivateRoute';
import PublicRoute from '../CustomRoutes/PublicRoute';
import { Header } from '../Header/Header';

const App = () => {

  return (
    <Suspense fallback={<p>Loding...</p>}>
      <Header/>
        <Switch>
          {routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            ),
          )}
        </Switch>
    </Suspense>
  );
};

export default App;
