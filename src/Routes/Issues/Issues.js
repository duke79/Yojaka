import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
import { NavLink } from "react-router-dom";

const Issues = () => (
  <div>
    <MyBreadCrumb
      items={[<NavLink to="/issues" className="nav-text">Issues</NavLink>]} />
  </div>
);

export default Issues