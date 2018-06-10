import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Project from './Routes/Project/Project.js'
import Issues from './Routes/Issues/Issues.js'
import Members from './Routes/Members/Members.js'

import MySideNav from './components/MySideNav/MySideNav.js'
import MyTopNav from './components/MyTopNav/MyTopNav.js'
import MyBreadCrumb from './components/MyBreadCrumb/MyBreadCrumb.js'

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


class MainRouter extends React.Component {
  render() {
    return <Router>      
      <div>
        <Layout>
          <Header>
            <MyTopNav />
          </Header>
          <Content>
            <Layout>
              <Sider id={"side_nav"}>
                <MySideNav />
              </Sider>
              <Content style={{ marginLeft: 23, marginRight: 23 }}>
                <Route exact path="/" component={Project} />
                <Route path="/issues" component={Issues} />
                <Route path="/members" component={Members} />
              </Content>
            </Layout>
          </Content>
        </Layout>
      </div>
    </Router>
  }
}

export default MainRouter;