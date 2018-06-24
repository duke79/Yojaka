import React from 'react';
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
    "author": "Zildana Dessus",
    "authored":"May 17, 2026",
    "text": "## Comment Title \n\n This is comment text.",
}

export default IssueHeader