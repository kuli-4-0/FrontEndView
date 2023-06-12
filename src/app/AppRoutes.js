import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const FormEvent = lazy(() => import('./form-elements/FormEvent'))

const ListEvents = lazy(() => import('./tables/ListEvents'));
const ListMusisi = lazy(() => import('./tables/ListMusisi'));
const ListEO = lazy(() => import('./tables/ListEO'));


const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));
const Profile = lazy(() => import('./user-pages/Profile'));
const ChangePw = lazy(() => import('./user-pages/ChangePw'))
const EventDetail = lazy(() => import('./details/EventDetail'))





class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/form-Elements/form-event" component={ FormEvent } />

          <Route path="/tables/list-events" component={ ListEvents } />
          <Route path="/tables/list-musisi" component={ ListMusisi } />
          <Route path="/tables/list-eo" component={ ListEO } />

          <Route path="/details/event-detail" component={ EventDetail } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/changepassword-1" component={ ChangePw } />
          <Route path="/user-pages/profile" component={ Profile } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;