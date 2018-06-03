import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
import IssueTitle from '../../components/IssueTitle/IssueTitle.js'
import { NavLink } from "react-router-dom";
import Menu from './Menu.js'
import SearchBox from './SearchBox.js'

class Issues extends React.Component {
  render() {
    return <div>
      <MyBreadCrumb
        items={[<NavLink to="/issues" className="nav-text">Issues</NavLink>]} />
      <Menu />
      <SearchBox />
      <IssueTitle/>
    </div>
  }
}

export default Issues