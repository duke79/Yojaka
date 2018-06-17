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
        // var elems = e.currentTarget.querySelectorAll(".MySideNav-SubItem")
        var SubMenuItems = $(e.currentTarget).find(".MySideNav-SubItem")
        if (SubMenuItems.length > 0) {
            SubMenuItems.each((index, item) => {
                $(item).removeClass("MySideNav-SubItem").addClass("MySideNav-SubItem-Expanded");
            });
        }
        else{
            SubMenuItems = $(e.currentTarget).find(".MySideNav-SubItem-Expanded");
            SubMenuItems.each((index, item) => {
                $(item).removeClass("MySideNav-SubItem-Expanded").addClass("MySideNav-SubItem");
            });
        }
    }

    getItems(){
        var elems = []
        this.props.items.forEach(element => {
            elems.push(
                <div className="MySideNav-Item">
                    <NavLink to={"/"+element[1]} className="nav-text">{element[0]}</NavLink>
                </div>
            );
        });
        return elems;
    }

    render() {
        var urlParts = window.location.href.split("/");
        var items = this.getItems()

        return <div className="MySideNav-Wrapper">
            <div className="MySideNav-Header">
                <div className="MySideNav-Brand">
                    <NavLink to="/" className="nav-text">Vilokan Labs</NavLink>
                </div>
            </div>
            <div className="MySideNav-Container">
                <div className="MySideNav-Item">
                    <NavLink to="/project" className="nav-text">Project</NavLink>
                </div>
                <div className="MySideNav-SubMenu" onClick={((e) => this.onSubMenuClick(e))}>
                    <NavLink to="/issues" className="nav-text">Issues</NavLink>
                    <div className="MySideNav-SubItem">
                        <NavLink to="/issues" className="nav-text">List</NavLink>
                    </div>
                    <div className="MySideNav-SubItem">
                        <NavLink to="/boards" className="nav-text">Boards</NavLink>
                    </div>
                    <div className="MySideNav-SubItem">
                        <NavLink to="/labels" className="nav-text">Labels</NavLink>
                    </div>
                    <div className="MySideNav-SubItem">
                        <NavLink to="/service_desk" className="nav-text">Service Desk</NavLink>
                    </div>
                    <div className="MySideNav-SubItem">
                        <NavLink to="/milestones" className="nav-text">Milestones</NavLink>
                    </div>
                </div>
                <div className="MySideNav-Item">
                    <NavLink to="/members" className="nav-text">Members</NavLink>
                </div>
                {items}
            </div>
            <div className="MySideNav-Footer">
                {"<< Collapse Sidebar"}
            </div>
        </div>
    }
}

MySideNav.defaultProps = {
    items:[
        ["Project","project"],
        ["Issues","issues"],
        ["Members","members"],
    ]
};

export default MySideNav