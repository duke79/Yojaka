import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyBreadCrumb from '../../components/MyBreadCrumb/MyBreadCrumb.js'
// import IssueHeader from '../../components/IssueHeader/IssueHeader'
// import Comment from '../../components/Comment/Comment'
import Editor from '../../components/Markdown/MarkdownEditor'
import MyInput from '../../components/MyInput/MyInput'
import MyButton from '../../components/MyButton/MyButton'
import { NavLink } from "react-router-dom";
import styles from './NewIssue.css'

class NewIssue extends React.Component {
  render() {
    return <div className={styles["Wrapper"]}>
      <MyBreadCrumb
        items={[
          <NavLink to="/issues" className="nav-text">Issues</NavLink>,
          <NavLink to={this.props.match.path} className="nav-text">{/*this.props.match.path.split("/")[1]*/"New Issue"}</NavLink>
        ]} />
      <div className={styles["Container"]}>
        {/* <div class={styles["TitleLabel"]}>Title</div> */}
        <img className={styles["Avatar"]} src={this.props.avatar} />
        <MyInput className={styles["Title"]} placeholder="Title" />
        {/* <div class={styles["EditorLabel"]}>Description</div> */}
        <div className={styles["Editor"]}>
          <Editor />
          <div className={styles["Editor-Footer"]}>
            <a
              className={styles["markdownRef"]}
              href="https://guides.github.com/features/mastering-markdown/"
              target="_blank">
              - Styling with markdown is supported -
            </a>
            <MyButton className={styles["Editor-Submit"]} ></MyButton>
          </div>
        </div>
      </div>
    </div>
  }
}

NewIssue.defaultProps = {
  "avatar": "https://assets.gitlab-static.net/uploads/-/system/user/avatar/525004/avatar.png",
}

export default NewIssue