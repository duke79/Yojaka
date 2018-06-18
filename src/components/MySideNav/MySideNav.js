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
        var SubMenuItems = $(e.currentTarget).find(".MySideNav-SubItem");
        if ($(e.target).hasClass("MySideNav-SubTitle")) {
            SubMenuItems.each((index, item) => {
                if ($(item).css("display") === "none")
                    $(item).css("display", "block");
                else
                    $(item).css("display", "none");
            });
        }
    }

    getItems() {
        var elems = []
        var header = "";
        var footer = "";
        var container_elems = []

        if (typeof (this.props.menu.header) !== "undefined") {
            if (this.props.menu.header.link !== "") {
                elems.push(
                    <div className="MySideNav-Header">
                        <NavLink to={this.props.menu.header.link} className="MySideNav-Brand">{this.props.menu.header.value}</NavLink>
                    </div>
                );
            }
            else {
                elems.push(
                    <div className="MySideNav-Header">
                        <div className="MySideNav-Brand">{this.props.menu.header.value}</div>
                    </div>
                );
            }
        }

        this.props.menu.container.forEach(element => {
            if (element.type == "item") {
                if (element.link !== "") {
                    container_elems.push(
                        <NavLink to={element.link} className="MySideNav-Item">{element.value}</NavLink>
                    );
                } else {
                    container_elems.push(
                        <div className="MySideNav-Item">{element.value}</div>
                    );
                }
            }
            if (element.type == "submenu") {
                var subelems = [];
                if (element.link !== "") {
                    subelems.push(<NavLink to={element.link} className="nav-text MySideNav-SubTitle">{element.value}</NavLink>);
                } else {
                    subelems.push(<div to={element.link} className="nav-text MySideNav-SubTitle">{element.value}</div>);
                }
                element.items.forEach(subitem => {
                    if (subitem.link !== "") {
                        subelems.push(
                            <NavLink to={subitem.link} className="MySideNav-SubItem">{subitem.value}</NavLink>
                        );
                    } else {
                        subelems.push(
                            <div className="MySideNav-SubItem">{subitem.value}</div>
                        );
                    }
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
            if (this.props.menu.footer.link !== "") {
                elems.push(
                    <NavLink to={this.props.menu.footer.link} className="MySideNav-Footer">{this.props.menu.footer.value}</NavLink>
                );
            } else {
                elems.push(
                    <div className="MySideNav-Footer">{this.props.menu.footer.value}</div>
                );
            }
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
                "link": "",
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
            }
        ],
        footer: {
            "type": "item",
            "value": "<< Collapse Sidebar",
            "link": ""
        },
    }
};

export default MySideNav