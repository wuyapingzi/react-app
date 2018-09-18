import React, {Component} from 'react';

import Header from '../../common/component/header';
import Menu from '../../common/component/menu';
import Course from './course';
import Vip from './vip'
import Miaov from './miaov';
import WorkList from './workList';
import Footer from '../../common/component/footer';
import '../../common/css/home.css';
let tabImg = [
  require('../../common/img/tab/img1.png'),
  require('../../common/img/tab/img2.png'),
  require('../../common/img/tab/img3.png'),
  require('../../common/img/tab/img4.png'),
]
export default class Home extends Component {
  render(){
    return (
      <div>
        <Header menu={true} login={true}/>
        <div className='page'>
          {/* <div className='page-con'></div> */}
          {/* <Menu /> */}
          <div className='tab banner'>
            <ul className='picList'>
              {tabImg.map((item, index) => {
                return(
                  <li key={index}>
                    <img src={item} />
                  </li>
                );
              })}
            </ul>
            <nav className='picNav'>
              {tabImg.map((item, index) => {
                return(
                  <span key={index} className={index==0? 'active': ''}></span>
                );
              })}
            </nav>
          </div>
          <Course />
          <Vip />
          <Miaov />
          <WorkList />
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}