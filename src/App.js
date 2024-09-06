import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import ListPage from './pages/ListPage/index'
// import ViewPage from './pages/ViewPage/index'

const ListPage = lazy(() => import('./pages/ListPage'));
const ViewPage = lazy(() => import('./pages/ViewPage'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>로딩중..</div>}>
        <Switch>
          <Route path='/' component={ListPage} exact />
          <Route path='/view/:id' component={ViewPage} exact />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
