/**
 * Created by Administrator on 2017/03/23 0023.
 */
import React, { Component } from 'react';
import { Grid, Icon } from 'antd-mobile';

import BaseSkeleton from '@/components/common/BaseSkeleton/index';

import { memberInfoMenus, myInfoMenes } from "@/global";


import './index.less';

const circleUrl = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
const temp = [1, 2, 3, 4];

const Item = ({ item }) => {
  return (
    <li className="memberMenuIconBox">
      <p>
        <img src={item.imgName} />
      </p>
      <p>{item.name}</p>
    </li>
  )
}

class User extends Component {

  render() {
    return (
      <div className="memberFirstBox">
        <div className="memberInfo">
          <div className="memberInfoBox">
            <div className="headInfo headImg">
              <img src={circleUrl} style={{ width: 50, height: 50 }} />
            </div>
            <div className="headInfo">
              <p className="memberName">再见孙悟空</p>
              <p className="tagBox">
                <span className="memberTag">去认证 {`>`}</span>
                <span className="memberTag">成长值345 {`>`}</span>
              </p>
            </div>
          </div>

          <ul className="memberMenuBox">
            {
              myInfoMenes.map((item, index) => <Item key={index} item={item} />)
            }
          </ul>

        </div>
        <div className="page">
          <div className="informationContainer">
            <div className="orderMenuBox">
              <Grid
                hasLine={false}
                columnNum={5}
                data={
                  memberInfoMenus.map(item => {
                    return {
                      ...item,
                      text: item.name,
                      icon: item.imgName
                    }
                  })
                }
              />
            </div>
            <div className="orderMenuBox">
              <BaseSkeleton width="5rem" />
              <BaseSkeleton width="4rem" height="0.25rem" />
              <BaseSkeleton width="5rem" />
              <BaseSkeleton width="4rem" height="0.25rem" />
            </div>
            <div className="orderMenuBox">
              <BaseSkeleton width="5rem" />
              <BaseSkeleton width="4rem" height="0.25rem" />
              <BaseSkeleton width="5rem" />
              <BaseSkeleton width="4rem" height="0.25rem" />
            </div>
            <div className="orderMenuBox">
              <BaseSkeleton width="5rem" />
              <BaseSkeleton width="4rem" height="0.25rem" />
              <BaseSkeleton width="5rem" />
              <BaseSkeleton width="4rem" height="0.25rem" />
            </div>
            <div className="orderMenuBox">
              <BaseSkeleton width="5rem" />
              <BaseSkeleton width="4rem" height="0.25rem" />
              <BaseSkeleton width="5rem" />
              <BaseSkeleton width="4rem" height="0.25rem" />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default User;