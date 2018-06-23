import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
import IssueTitle from '../../components/IssueTitle/IssueTitle.js'
import { NavLink } from "react-router-dom";
import Markdown from '../../components/Markdown/Markdown'
import './Issue.css'

class Issue extends React.Component {
  render() {
    return <div className="Issue-Wrapper">
      <MyBreadCrumb
        items={[
          <NavLink to="/issues" className="nav-text">Issues</NavLink>,
          <NavLink to="/issues/24" className="nav-text">#24</NavLink>
        ]} />
      <Markdown
        text="
        # Dillinger

        [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

        Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

        * Type some Markdown on the left
        * See HTML in the right
        * Magic

        > The overriding design goal for Markdown's
        > formatting syntax is to make it as readable
        > as possible. The idea is that a


        This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

        ### Tech

        Dillinger uses a number of open source projects to work properly:

        * [AngularJS] - HTML enhanced for web apps!
        * [Breakdance](http://breakdance.io) - HTML to Markdown converter
        * [jQuery] - duh

        And of course Dillinger itself is open source with a [public repository][dill]
        on GitHub.

        ### Installation

        Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

        Install the dependencies and devDependencies and start the server.
        
        For production environments...

        ```sh
        $ npm install --production
        $ NODE_ENV=production node app
        ```
        " />
    </div>
  }
}

export default Issue