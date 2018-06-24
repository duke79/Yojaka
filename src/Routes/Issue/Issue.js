import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
import IssueHeader from '../../components/IssueHeader/IssueHeader'
import Comment from '../../components/Comment/Comment'
import { NavLink } from "react-router-dom";
import './Issue.css'

class Issue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // "issue" : props.match.params.issue,
    }
  }

  componentDidMount() {
    // this.state = {
    //   "issue" : this.props.match.params.issue,
    // }
  }

  render() {
    return <div className="Issue-Wrapper">
      <MyBreadCrumb
        items={[
          <NavLink to="/issues" className="nav-text">Issues</NavLink>,
          <NavLink to={"/issues/" + this.props.match.params.issue} className="nav-text">{"#" + this.props.match.params.issue}</NavLink>
        ]} />

      <IssueHeader
        title={this.props.title}
        author={this.props.author}
        authored={this.props.authored}
        status={this.props.status}
      />

      <div className="Issue-Discussion">
        <Comment text={this.props.description}/>
      </div>
    </div>
  }
}

Issue.defaultProps = {
  "title": "My Issue Title",
  "author": "Pulkit Singh",
  "authored": "Oct 21, 2016",
  "status": "Open",
  "description": "[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)\n\nDillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.\n\n* Type some Markdown on the left\n\n* See HTML in the right\n\n* Magic\n\n> The overriding design goal for Markdown's\n> formatting syntax is to make it as readable\n> as possible. The idea is that a\n\nThis text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.\n### Tech\nDillinger uses a number of open source projects to work properly:\n* [AngularJS] - HTML enhanced for web apps!\n\n* [Breakdance](http://breakdance.io) - HTML to Markdown converter\n* [jQuery] - duh\n\nAnd of course Dillinger itself is open source with a [public repository][dill]\non GitHub.\n\n### Installation\n\nDillinger requires [Node.js](https://nodejs.org/) v4+ to run.\n\nInstall the dependencies and devDependencies and start the server.\n\nFor production environments...\n\n\`\`\`sh\n\n$ npm install --production\n$ NODE_ENV=production node app\n\`\`\`",
}

export default Issue