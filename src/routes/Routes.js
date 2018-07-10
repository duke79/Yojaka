import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery'

import Project from './Project/Project.js'
import Issue from './Issue/Issue.js'
import Issues from './Issues/Issues.js'
import Members from './Members/Members.js'
import NewIssue from './NewIssue/NewIssue.js';
import Network from './Network/Network.js'

import MySideNav from '../components/MySideNav/MySideNav.js'
import MyTopNav from '../components/MyTopNav/MyTopNav.js'
// import MyBreadCrumb from '../components/MyBreadCrumb/MyBreadCrumb.js'

import styles from './Routes.css'

class Routes extends React.Component {

    toggleSideNav() {
        this.sideNav.toggleDisplay();
    }

    toggleWrapperHeight() {
        if ($("." + styles["Wrapper"]).css("z-index") === "-1") {
            setTimeout(function () { /*delay required, otherwise SideNav becomes see through*/
                $("." + styles["Wrapper"]).css("z-index", "");
            }, 200);
        }
        else {
            $("." + styles["Wrapper"]).css("z-index", "-1"); /*To make SideNav-Scrim clickable */
        }
    }

    render() {
        return <Router>
            <div>
                <MyTopNav onMenuIconClick={this.toggleSideNav.bind(this)} />
                <MySideNav
                    ref={(ref) => this.sideNav = ref}
                    onScrimClick={this.toggleWrapperHeight.bind(this)}
                    menu={this.menu} />

                <div className={styles["Wrapper"]}>
                    <Route exact path="/" component={Project} />
                    <Route exact path="/issues" component={Issues} />
                    <Route exact path="/issues/:issue" component={Issue} />
                    <Route exact path="/members" component={Members} />
                    <Route exact path="/newissue" component={NewIssue} />
                    <Route exact path="/network" component={Network} />
                </div>
            </div>
        </Router >
    }

    menu = {
        header: {
            "type": "item",
            "value": "Vilokan Labs",
            "link": "/"
        },
        container: [
            {
                "type": "item",
                "value": "Project",
                "link": "/project"
            },
            {
                "type": "submenu",
                "value": "Issues",
                "link": "",
                "items": [
                    {
                        "type": "subitem",
                        "value": "List",
                        "link": "/issues"
                    },
                    {
                        "type": "subitem",
                        "value": "Boards",
                        "link": "/boards"
                    },
                    {
                        "type": "subitem",
                        "value": "Labels",
                        "link": "/labels"
                    },
                    {
                        "type": "subitem",
                        "value": "Service Desk",
                        "link": "/service_desk"
                    },
                    {
                        "type": "subitem",
                        "value": "Milestones",
                        "link": "/milestones"
                    }
                ]
            },
            {
                "type": "item",
                "value": "Members",
                "link": "/members"
            },
            {
                "type": "item",
                "value": "Wiki",
                "link": "/wiki"
            },
            {
                "type": "submenu",
                "value": "Insights",
                "link": "",
                "items": [
                    {
                        "type": "subitem",
                        "value": "Pulse",
                        "link": "/pulse"
                    },
                    {
                        "type": "subitem",
                        "value": "Contributors",
                        "link": "/contributors"
                    },
                    {
                        "type": "subitem",
                        "value": "Community",
                        "link": "/community"
                    },
                    {
                        "type": "subitem",
                        "value": "Commits",
                        "link": "/commits"
                    },
                    {
                        "type": "subitem",
                        "value": "Code Frequency",
                        "link": "/code_frequency"
                    },
                    {
                        "type": "subitem",
                        "value": "Dependency Graph",
                        "link": "/dependency_graph"
                    },
                    {
                        "type": "subitem",
                        "value": "Network",
                        "link": "/network"
                    },
                    {
                        "type": "subitem",
                        "value": "Forks",
                        "link": "/forks"
                    },
                ]
            }
        ],
        footer: {
            "type": "item",
            "value": "<< Collapse Sidebar",
            "link": ""
        },
    };
}

export default Routes;