import { NavLink } from "react-router-dom";
import React, { Component } from 'react';
import $ from 'jquery'
import './MySideNav.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
class MySideNav extends Component {
    state = {
    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        var activeSubItem = $(".MySideNav-SubItem.active");
        if (typeof (activeSubItem) !== 'undefined') {
            var subItemsContainer = activeSubItem.parent();
            subItemsContainer.css("display", "block");
        }
    }

    onSubMenuClick(e) {
        var subMenuItemsContainer = $(e.currentTarget).find(".MySideNav-SubItems-Container");
        var subMenuTitleCaretDown = $(e.currentTarget).find(".MySideNav-CaretDown");
        if ($(e.target).hasClass("MySideNav-SubTitle") || $(e.target).hasClass("MySideNav-CaretDown")) {
            if (subMenuItemsContainer.css("display") === "none")
                // subMenuItemsContainer.css("display", "block");
                subMenuItemsContainer.show(100);
            else
                // subMenuItemsContainer.css("display", "none");
                subMenuItemsContainer.hide(100)

            subMenuTitleCaretDown.toggleClass("down");
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
                        <NavLink exact to={this.props.menu.header.link} className="MySideNav-Brand">{this.props.menu.header.value}</NavLink>
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
                var subMenuTitle = {};
                if (element.link !== "") {
                    subMenuTitle = <NavLink to={element.link} className="nav-text MySideNav-SubTitle">{element.value}</NavLink>
                } else {
                    subMenuTitle = <div to={element.link} className="nav-text MySideNav-SubTitle" >{element.value}
                        <i className="fa fa-caret-down MySideNav-CaretDown rotate" />
                    </div>
                }

                var subelems = [];
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
                    {subMenuTitle}
                    <div className="MySideNav-SubItems-Container">
                        {subelems}
                    </div>
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
                        "link": "/service_desk"
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