import React, {Component} from 'react';
import Header from '../../common/component/header';
import Menu from '../../common/component/menu';
import Footer from '../../common/component/footer';
import '../../common/css/course.css';
export default class Course extends Component {
  render(){
    return (
      <div>
        <Header menu={true} login={true} />
        {/* <Menu /> */}
        <div className='page course-page'>
          <div className='page-con'>
            <h2 className='course-title'>
              <img src={require('../../common/img/course-title.png')} />
            </h2>
            <table className='course-table'>
              <thead>
                <tr>
                  <th>星期</th>
                  <th>时间</th>
                  <th>学习内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan='2'>星期一</td>
                  <td>上午</td>
                  <td>前端代码厨师</td>
                </tr>
                <tr>
                  <td>下午</td>
                  <td>基本属性：背景、边框</td>
                </tr>
                <tr>
                  <td rowSpan='2'>星期二</td>
                  <td>上午</td>
                  <td>表单详解</td>
                </tr>
                <tr>
                  <td>下午</td>
                  <td>定位进阶</td>
                </tr>
                <tr>
                  <td rowSpan='2'>星期三</td>
                  <td>上午</td>
                  <td>浏览器兼容性</td>
                </tr>
                <tr>
                  <td>下午</td>
                  <td>react移动端布局</td>
                </tr>
                <tr>
                  <td rowSpan='2'>星期四</td>
                  <td>上午</td>
                  <td>web全站</td>
                </tr>
                <tr>
                  <td>下午</td>
                  <td>基本属性：背景、边框</td>
                </tr>
                <tr>
                  <td rowSpan='2'>星期五</td>
                  <td>上午</td>
                  <td>前端代码厨师</td>
                </tr>
                <tr>
                  <td>下午</td>
                  <td>基本属性：背景、边框</td>
                </tr>
                <tr>
                  <td rowSpan='2'>星期六</td>
                  <td>上午</td>
                  <td>前端代码厨师</td>
                </tr>
                <tr>
                  <td>下午</td>
                  <td>基本属性：背景、边框</td>
                </tr>
              </tbody>
            </table>
            <p className='course-more'>
              <span>更详情的课程安排请点击：</span>
              <a href='https://study.miaov.com/study/classes/index'>课程安排详情</a>
            </p>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}