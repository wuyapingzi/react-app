import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class WorkList extends Component{
  render(){
    return(
      <section className='workList'>
        <h2 className='workListTitle'>学员作品</h2>
        <ul className='works'>
          <li>
            <Link to='/work'>
              <img src={require('../../common/img/work.png')}/>
              <div className='workMask'>
                <h4 className='workTitle'>时空唱片机</h4>
                <span className='iconfont icon-tuijian'>2000</span>
                <span className='iconfont icon-liuyan'>200</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/work'>
              <img src={require('../../common/img/work.png')}/>
              <div className='workMask'>
                <h4 className='workTitle'>时空唱片机</h4>
                <span className='iconfont icon-tuijian'>2000</span>
                <span className='iconfont icon-liuyan'>200</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/work'>
              <img src={require('../../common/img/work.png')}/>
              <div className='workMask'>
                <h4 className='workTitle'>时空唱片机</h4>
                <span className='iconfont icon-tuijian'>2000</span>
                <span className='iconfont icon-liuyan'>200</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/work'>
              <img src={require('../../common/img/work.png')}/>
              <div className='workMask'>
                <h4 className='workTitle'>时空唱片机</h4>
                <span className='iconfont icon-tuijian'>2000</span>
                <span className='iconfont icon-liuyan'>200</span>
              </div>
            </Link>
          </li>
        </ul>
        <footer className='loadMore'>
          <span>正在加载更多内容</span>
        </footer>
      </section>
    );
  }
}