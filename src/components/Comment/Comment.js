import React from 'react';
import { NavLink } from "react-router-dom";
// import $ from 'jquery'
import Markdown from '../../components/Markdown/Markdown'
import './Comment.css'


class IssueHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <div className="Comment-Wrapper">
            <NavLink to={"/" + this.props.author_id} className="Comment-Avatar-Wrapper">
                <img className="Comment-Avatar" src={this.props.avatar} />
            </NavLink>
            <div className="Comment-Header">
                <span className="Comment-Author">{this.props.author}</span>
                <span>{"commented on"}</span>
                <span className="Comment-Authored">{this.props.authored}</span>
            </div>
            <div className="Comment-Container">
                <Markdown text={this.props.text} />
            </div>
        </div>
    }
}

IssueHeader.defaultProps = {
    "avatar": "https://assets.gitlab-static.net/uploads/-/system/user/avatar/525004/avatar.png",
    "author_id": "zildana_007",
    "author": "Zildana Dessus",
    "authored": "May 17, 2026",
    "text": "## Comment Title \n\n This is comment text.",
}

export default IssueHeader