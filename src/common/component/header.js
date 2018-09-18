import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Header extends Component {
  render(){
    return(
      <header id='header'>
        <Link to='/login' className='header-btn-right '></Link>
        <span className='header-btn-right header-user-name'>miaov</span>
        <img src={require('../img/logo.png')} id='logo'/>
        <a href='javascript:' className='header-btn-left iconfont icon-caidan'> </a>
        <a href='javascript:' className='header-btn-left'></a>
      </header>
    );
  }
}