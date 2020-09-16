import React from 'react';
import Menu from './components/Menu/Menu'
import './App.css';
import routes from './routes';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
        {this.showContentMenus(routes)}
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if(routes) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return <Switch>{result}</Switch>
  }  
  
}

export default App;
