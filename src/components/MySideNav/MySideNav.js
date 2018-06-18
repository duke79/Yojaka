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
        if ($(e.target).hasClass("MySideNav-SubTitle")) {
            var SubMenuItems = $(e.currentTarget).find(".MySideNav-SubItem")
            if (SubMenuItems.length > 0) {
                SubMenuItems.each((index, item) => {
                    $(item).removeClass("MySideNav-SubItem").addClass("MySideNav-SubItem-Expanded");
                });
            }
            else {
                SubMenuItems = $(e.currentTarget).find(".MySideNav-SubItem-Expanded");
                SubMenuItems.each((index, item) => {
                    $(item).removeClass("MySideNav-SubItem-Expanded").addClass("MySideNav-SubItem");
                });
            }
        }
    }

    getItems() {
        var elems = []
        var header = "";
        var footer = "";
        var container_elems = []

        if (typeof (this.props.menu.header) !== "undefined") {
            elems.push(
                <div className="MySideNav-Header">
                    <div className="MySideNav-Brand">
                        <NavLink to={this.props.menu.header.link} className="nav-text">{this.props.menu.header.value}</NavLink>
                    </div>
                </div>
            );

        }

        this.props.menu.container.forEach(element => {
            if (element.type == "item") {
                container_elems.push(
                    <div className="MySideNav-Item">
                        <NavLink to={element.link} className="nav-text">{element.value}</NavLink>
                    </div>
                );
            }
            if (element.type == "submenu") {
                var subelems = [];
                subelems.push(<NavLink to={element.link} className="nav-text MySideNav-SubTitle">{element.value}</NavLink>);
                element.items.forEach(subitem => {
                    subelems.push(
                        <div className="MySideNav-SubItem">
                            <NavLink to={subitem.link} className="nav-text">{subitem.value}</NavLink>
                        </div>
                    );
                });
                container_elems.push(<div className="MySideNav-SubMenu" onClick={((e) => this.onSubMenuClick(e))}>
                    {subelems}
                </div>);
            }
        });

        elems.push(
            <div className="MySideNav-Container">
                {container_elems}
            </div>);

        if (typeof (this.props.menu.footer) !== "undefined") {
            elems.push(
                <div className="MySideNav-Footer">
                    <div className="MySideNav-Brand">
                        <NavLink to={this.props.menu.footer.link} className="nav-text">{this.props.menu.footer.value}</NavLink>
                    </div>
                </div>
            );
        }

        return elems;
    }

    render() {
        var urlParts = window.location.href.split("/");
        var items = this.getItems()

        return <div className="MySideNav-Wrapper">
            {items}
        </div>
    }
}

MySideNav.defaultProps = {
    menu: {
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
                "link": "/issues",
                "items": [
                    {
                        "type": "subitem",
                        "value": "List",
                        "link": "/list"
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
                        "link": "/service_desk  "
                    }
                ]
            },
            {
                "type": "item",
                "value": "Members",
                "link": "/members"
            },
        ],
        footer: {
            "type": "item",
            "value": "<< Collapse Sidebar",
            "link": ""
        },
    }
};

export default MySideNav