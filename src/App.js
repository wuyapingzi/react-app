import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './view/home/index';
import Course from './view/course/index';
import Lecturer from './view/lecturer/index';
import Login from './view/login/index';
import Message from './view/message/index';
import Work from './view/work/index';

import './common/css/style.css';

class App extends Component {
  render(){
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/course' component={Course} />
        <Route path='/lecturer' component={Lecturer} />
        <Route path='/login' component={Login} />
        <Route path='/message' component={Message} />
        <Route path='/work' component={Work} />
      </Switch>
    )
  }
}

export default App;