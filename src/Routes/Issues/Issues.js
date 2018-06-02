import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
import { NavLink } from "react-router-dom";
import Menu from './Menu.js'

class Issues extends React.Component {
  render() {
    return <div>
      <MyBreadCrumb
        items={[<NavLink to="/issues" className="nav-text">Issues</NavLink>]} />
        <Menu/>
    </div>
  }
}

export default Issues