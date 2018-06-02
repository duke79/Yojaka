import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Project from './Routes/Project/Project.js'
import Issues from './Routes/Issues/Issues.js'
import Members from './Routes/Members/Members.js'

import MySideNav from './components/MySideNav/MySideNav.js'
import MyTopNav from './components/MyTopNav/MyTopNav.js'

class MainRouter extends React.Component {  
  render() {
    return <Router>
      <div>        
        <MyTopNav/>
        <MySideNav/>
        <Route exact path="/" component={Project} />
        <Route path="/issues" component={Issues} />
        <Route path="/members" component={Members} />
      </div>
    </Router>
  }
}

export default MainRouter;