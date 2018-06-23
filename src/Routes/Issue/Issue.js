import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
import IssueTitle from '../../components/IssueTitle/IssueTitle.js'
import { NavLink } from "react-router-dom";
import './Issue.css'

class Issue extends React.Component {
  render() {
    return <div className="Issue-Wrapper">
      {/* <MyBreadCrumb
        items={[<NavLink to="/issues" className="nav-text">Issues</NavLink>]} /> */}
      <IssueTitle/>
    </div>
  }
}

export default Issue