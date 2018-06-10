import React from 'react';
import styled from 'styled-components'
import { Menu, Icon } from 'antd';
import { NavLink } from "react-router-dom";
import 'antd/dist/antd.css'

import MySearchBox from '../MySearchBox/MySearchBox.js'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const StyledMenu = styled(Menu) `
    position: fixed;
    top: 64px;
    width:201px;
`

const StyledMenuItemBottom = styled(Menu.Item) `
    bottom: 0;
    position: fixed;
`

class MySideNav extends React.Component {
    state = {
        // current: 'projects',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        var urlParts = window.location.href.split("/")        

        return <div >
            <StyledMenu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="vertical"
            // theme="dark"
            >
                <Menu.Item key="project">
                    <NavLink to="/project" className="nav-text"><Icon type="mail" />Project</NavLink>
                </Menu.Item>
                {/* <Menu.Item key="issues">
                    <NavLink to="/issues" className="nav-text"><Icon type="mail" />Issues</NavLink>
                </Menu.Item> */}
                <SubMenu title={<span><Icon type="setting" />Issues</span>} key="issues">
                    <Menu.Item key="issues">
                        <NavLink to="/issues" className="nav-text">List</NavLink>
                    </Menu.Item>
                    <Menu.Item key="boards">
                        <NavLink to="/boards" className="nav-text">Boards</NavLink>
                    </Menu.Item>
                    <Menu.Item key="labels">
                        <NavLink to="/labels" className="nav-text">Labels</NavLink>
                    </Menu.Item>
                    <Menu.Item key="service_desk">
                        <NavLink to="/service_desk" className="nav-text">Service Desk</NavLink>
                    </Menu.Item>
                    <Menu.Item key="milestones">
                        <NavLink to="/milestones" className="nav-text">Milestones</NavLink>
                    </Menu.Item>
                </SubMenu>
                <StyledMenuItemBottom key="members">
                    <NavLink to="/members" className="nav-text"><Icon type="mail" />Members</NavLink>
                </StyledMenuItemBottom>
                {/* <MySearchBox /> */}
            </StyledMenu>
        </div>
    }
}

export default MySideNav