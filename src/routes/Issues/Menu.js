import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from "react-router-dom";
import 'antd/dist/antd.css'
import { Button } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MyTopeNav extends React.Component {
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
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="open">
                    <NavLink to="/issues" className="nav-text"><Icon type="mail" />Open</NavLink>
                </Menu.Item>
                <Menu.Item key="closed">
                    <NavLink to="/issues" className="nav-text"><Icon type="mail" />Closed</NavLink>
                </Menu.Item>
                <Menu.Item key="all">
                    <NavLink to="/issues" className="nav-text"><Icon type="mail" />All</NavLink>
                </Menu.Item>
                <Button type="primary">New Issue</Button>
            </Menu>
        );
    }
}

export default MyTopeNav