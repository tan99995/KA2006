import React from 'react';
import './App.scss';

import { Login, Register } from './component/login_components/index'
import {Route, Switch} from 'react-router-dom'
import Login_page from './component/login_page/login_page'
import Guest_page from './component/guest_page/guest_page'

class App extends React.Component{





  render() {

    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/guest" component={Guest_page} />
          <Route exact path="/" component={Login_page} />
        </Switch>
      </div>
    );
  }

}

export default App;
