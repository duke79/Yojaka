import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Topics from './Routes/Topics/Topics.js'
import Home from './Routes/Home/Home.js'
import About from './Routes/About/About.js'

import MySideNav from './components/MySideNav/MySideNav.js'

class MainRouter extends React.Component {  
  render() {
    return <Router>
      <div>        
        <MySideNav/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  }
}

export default MainRouter;