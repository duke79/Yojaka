import { NavLink } from "react-router-dom";
import React, { Component } from 'react';
import $ from 'jquery'
import './MySideNav.css'
class MySideNav extends Component {
    state = {
    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    onSubMenuClick(e) {
        // var elems = e.currentTarget.querySelectorAll(".MySideNav-Item")
        var SubMenuItems = $(e.currentTarget).find(".MySideNav-Item")
        if (SubMenuItems.length > 0) {
            SubMenuItems.each((index, item) => {
                $(item).removeClass("MySideNav-Item").addClass("MySideNav-Item-Expanded");
            });
        }
        else{
            SubMenuItems = $(e.currentTarget).find(".MySideNav-Item-Expanded");
            SubMenuItems.each((index, item) => {
                $(item).removeClass("MySideNav-Item-Expanded").addClass("MySideNav-Item");
            });
        }
    }

    render() {
        var urlParts = window.location.href.split("/");

        return <div className="MySideNav-Container">
            <div className="MySideNav-Brand">
                <NavLink to="/" className="nav-text">Vilokan Labs</NavLink>
            </div>
            <div className="MySideNav-Menu">
                <NavLink to="/project" className="nav-text">Project</NavLink>
            </div>
            <div className="MySideNav-SubMenu" onClick={((e) => this.onSubMenuClick(e))}>
                <NavLink to="/issues" className="nav-text">Issues</NavLink>
                <div className="MySideNav-Item">
                    <NavLink to="/issues" className="nav-text">List</NavLink>
                </div>
                <div className="MySideNav-Item">
                    <NavLink to="/boards" className="nav-text">Boards</NavLink>
                </div>
                <div className="MySideNav-Item">
                    <NavLink to="/labels" className="nav-text">Labels</NavLink>
                </div>
                <div className="MySideNav-Item">
                    <NavLink to="/service_desk" className="nav-text">Service Desk</NavLink>
                </div>
                <div className="MySideNav-Item">
                    <NavLink to="/milestones" className="nav-text">Milestones</NavLink>
                </div>
            </div>
            <div className="MySideNav-Menu">
                <NavLink to="/members" className="nav-text">Members</NavLink>
            </div>
        </div>
    }
}

MySideNav.propTypes = {

};

export default MySideNav