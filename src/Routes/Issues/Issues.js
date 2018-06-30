import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
import IssueHeader from '../../components/IssueHeader/IssueHeader'
import MyCard from '../../components/MyCard/MyCard'
import { NavLink } from "react-router-dom";
import Menu from './Menu.js'
import SearchBox from './SearchBox.js'
import './Issues.css'

import { connect } from 'react-redux'
import { loadIssues } from '../../redux/actions/actions'

class Issues extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadIssues(""));
    this.setState(() => {
      console.log("Issues being updated...");
    });
  }

  render() {
    const { StoreIssues } = this.props;

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
        {this.props.StoreIssues.map((issue) =>
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
  "filters": ["Sort", "Asignee", "Milestones", "Projects", "Labels", "Author"]
}

function select(state) {
  return {
    StoreIssues: state.Issues
  }
}

export default connect(select)(Issues);