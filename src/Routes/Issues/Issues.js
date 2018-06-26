import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
import IssueHeader from '../../components/IssueHeader/IssueHeader'
import MyCard from '../../components/MyCard/MyCard'
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
      <IssueHeader/>
      <MyCard/>
    </div>
  }
}

export default Issues