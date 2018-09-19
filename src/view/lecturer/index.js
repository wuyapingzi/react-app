import React, {Component} from 'react';
import Header from '../../common/component/header';
import Menu from '../../common/component/menu';
import Footer from '../../common/component/footer';
export default class Lecturer extends Component {
  render(){
    return (
      <div>
        <Header />
        <Menu />
        <div className='page'>
          <div className='page-con'></div>
          <Footer />
        </div>
      </div>
    );
  }
}