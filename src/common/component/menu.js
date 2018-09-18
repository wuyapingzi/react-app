import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu(){
  return(
    <nav id='menu' className='menu'>
      <Link to='/' className='iconfont icon-shouye'> 首页 </Link>
      <Link to='/course' className='iconfont icon-kecheng'>课程安排</Link>
      <Link to='/lecture' className='iconfont icon-peixunjiangshi'>讲师团队</Link>
    </nav>
  );
}