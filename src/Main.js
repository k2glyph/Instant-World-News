import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import PageNotFound from './pages/default';
import Live from './pages/live';
const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

const Main = (props) => (
  <main>
    <Switch>
      <PropsRoute exact path='/' component={Home} store={props.store}/>
      <Route exact path='/live' component={Live}/>
      <Route component={PageNotFound}/>
    </Switch>
  </main>
)
export default Main;