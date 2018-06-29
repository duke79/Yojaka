import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery'

import Project from './Project/Project.js'
import Issue from './Issue/Issue.js'
import Issues from './Issues/Issues.js'
import Members from './Members/Members.js'

import MySideNav from '../components/MySideNav/MySideNav.js'
import MyTopNav from '../components/MyTopNav/MyTopNav.js'
// import MyBreadCrumb from '../components/MyBreadCrumb/MyBreadCrumb.js'

import './Routes.css'

import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'
import AddToDo from '../components/ReduxDemoComponents/AddToDo'
import TodoList from '../components/ReduxDemoComponents/TodoList'


class Routes extends React.Component {

    toggleSideNav() {
        if ($(".Routes-Wrapper").css("z-index") === "-1") {
            this.sideNav.toggleDisplay();
            setTimeout(function(){ /*delay required, otherwise SideNav becomes see through*/
                $(".Routes-Wrapper").css("z-index", "");
            }, 200);
        }
        else{
            $(".Routes-Wrapper").css("z-index", "-1"); /*To make SideNav-Scrim clickable */
            this.sideNav.toggleDisplay();
        }
    }

    render() {
        const { dispatch, visibleTodos } = this.props

        return <Router>
            <div>
                <AddToDo onAddClick = {text => dispatch(addTodo(text))} />
                <TodoList todos = {visibleTodos}/>

                <MyTopNav onMenuIconClick={this.toggleSideNav.bind(this)} />
                <MySideNav
                    ref={(ref) => this.sideNav = ref}
                    onScrimClick={this.toggleSideNav.bind(this)}
                    menu={this.menu} />

                <div className="Routes-Wrapper">
                    <Route exact path="/" component={Project} />
                    <Route exact path="/issues" component={Issues} />
                    <Route exact path="/issues/:issue" component={Issue} />
                    <Route exact path="/members" component={Members} />
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
        ],
        footer: {
            "type": "item",
            "value": "<< Collapse Sidebar",
            "link": ""
        },
    };
}

function select(state) {
    return {
       visibleTodos: state.todos
    }
 }

 export default connect(select)(Routes);