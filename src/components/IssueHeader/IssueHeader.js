import React from 'react';
// import $ from 'jquery'
import './IssueHeader.css'


class IssueHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <div className="IssueHeader-Wrapper">
            <div className="IssueHeader-Title">{this.props.title}</div>
            <div className="IssueHeader-Meta">
                <span className="IssueHeader-Status">{this.props.status}</span>
                <span className="IssueHeader-Author">{this.props.author}</span>
                <span>{"opened this issue on"}</span>
                <span className="IssueHeader-Authored">{this.props.authored}</span>
            </div>
        </div>
    }
}

IssueHeader.defaultProps = {
    "title": "My Issue Title",
    "author": "Pulkit Singh",
    "authored": "Oct 21, 2016",
    "status": "Open"
}

export default IssueHeader