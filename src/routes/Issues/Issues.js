import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
import { NavLink } from "react-router-dom";
import MySearchBox from '../../components/MySearchBox/MySearchBox'
import styles from './Issues.css'
import fa_styles from '../../lib/font-awesome/css/font-awesome.min.css';
import MyButton from '../../components/MyButton/MyButton'

import { connect } from 'react-redux'
import { loadIssuesList } from '../../redux/actions/actions'

class Issues extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log("props are going to be updaed")
    this.setState(() => {
      console.log("Issues being updated...");
    });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadIssuesList(""));
  }

  render() {
    const { StoreIssues } = this.props;

    return <div className={styles.wrapper} >
      <MyBreadCrumb
        items={[<NavLink to="/issues" className="nav-text">Issues</NavLink>]} />
      <div className={styles["Actions"]}>
        <MySearchBox className={styles["Actions_Item"]} />
        <div className={styles["Actions_Gap"]}></div>
        <NavLink exact to={"/newissue"}>
          <MyButton
            // as={NavLink} to={"/newissue"}
            className={styles["Actions_EndItem"]}>
            New Issue
          </MyButton>
        </NavLink>
      </div>
      <div className={styles["Container"]}>
        <div className={styles["Container-Header"]}>
          <div className={styles["Container-Header-States"]}>
            <div className={styles["Container-Header-Open"]}>{this.props.open_issues + " Open"}</div>
            <div className={styles["Container-Header-Close"]}>{this.props.close_issues + " Closed"}</div>
          </div>
          <div className={styles["Filters"]}>
            {this.props.filters.map((filter) =>
              <div className={styles["Filter"]}>
                <div className={styles["Filter-Text"]}>{filter}</div>
                <i className={fa_styles["fa"] + " " + fa_styles["fa-caret-down"] + " rotate " + styles["Filter-CaretDown"]} />
              </div>
            )}
          </div>
        </div>
        {this.props.StoreIssues.map((issue) =>
          <div className={styles["Container-Item"]}>
            <div className={styles["Container-Item-Container"]}>
              <NavLink to={"issues/" + issue.number}>
                <div className={styles["Container-Item-Title"]}>{issue.title}</div>
              </NavLink>
              <div className={styles["Container-Item-Info"]}>
                <div className={styles["Container-Item-Info-Item"]}>{"#" + issue.number}</div>
                <div className={styles["Container-Item-Info-Item"]}>opened on</div>
                <div className={styles["Container-Item-Info-Item"]}>{issue.date}</div>
                <div className={styles["Container-Item-Info-Item"]}>by</div>
                <div className={styles["Container-Item-Info-Item"]}>{issue.author}</div>
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