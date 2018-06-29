import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
import IssueHeader from '../../components/IssueHeader/IssueHeader'
import MyCard from '../../components/MyCard/MyCard'
import { NavLink } from "react-router-dom";
import Menu from './Menu.js'
import SearchBox from './SearchBox.js'
import './Issues.css'


class Issues extends React.Component {
  render() {
    return <div className="Issues-Wrapper">
      <MyBreadCrumb
        items={[<NavLink to="/issues" className="nav-text">Issues</NavLink>]} />
      <Menu />
      <SearchBox />
      <div className="Issues-Container">
        <div className="Issues-Container-Header">
          <div className="Issues-Container-Header-States">
            <div className="Issues-Container-Header-Open">{this.props.open_issues + " Open"}</div>
            <div className="Issues-Container-Header-Close">{this.props.close_issues + " Closed"}</div>
          </div>
          <div className="Issues-Filters">
            {this.props.filters.map((filter) =>
              <div className="Issues-Filter">
                <div className="Issues-Filter-Text">{filter}</div>
                <i className="fa fa-caret-down Issues-Filter-CaretDown rotate" />
              </div>
            )}
          </div>
        </div>
        {this.props.issues.map((issue) =>
          <div className="Issues-Container-Item">
            <div className="Issues-Container-Item-Container">
              <NavLink to={"issues/" + issue.number}>
                <div className="Issues-Container-Item-Title">{issue.title}</div>
              </NavLink>
              <div className="Issues-Container-Item-Info">
                <div className="Issues-Container-Item-Info-Item">{"#" + issue.number}</div>
                <div className="Issues-Container-Item-Info-Item">opened on</div>
                <div className="Issues-Container-Item-Info-Item">{issue.date}</div>
                <div className="Issues-Container-Item-Info-Item">by</div>
                <div className="Issues-Container-Item-Info-Item">{issue.author}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  }
}

Issues.defaultProps = {
  "open_issues": "6",
  "close_issues": "3,592",
  "issues": [
    {
      "title": "enabled word breaking of card title",
      "number": "10485",
      "date": "March 29",
      "author": "bigbabla"
    },
    {
      "title": "Another Issue",
      "number": "445",
      "date": "December 04",
      "author": "bigbabla"
    },
    {
      "title": "This is going to be one hell of an issue owing to the lengh of the title that this issue is going to have. It may either mean that this issue's title will stay in a single line or break into multiple, in the later case the height of the row may increase, which is not a good design.",
      "number": "445",
      "date": "December 04",
      "author": "bigbabla"
    },
  ],
  "filters": ["Sort", "Asignee", "Milestones", "Projects", "Labels", "Author"]
}

export default Issues