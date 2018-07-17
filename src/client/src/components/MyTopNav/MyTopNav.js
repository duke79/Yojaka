import React from 'react';
// import { Menu, Icon } from 'antd';
import { NavLink } from "react-router-dom";
// import 'antd/dist/antd.css'
import styles from './MyTopNav.css'
import fa_styles from '../../lib/font-awesome/css/font-awesome.min.css';

// import MyInput from '../MyInput/MyInput.js'

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class MyTopeNav extends React.Component {
    // state = {
    //     // current: 'projects',
    // }

    // handleClick = (e) => {
    //     console.log('click ', e);
    //     this.setState({
    //         current: e.key,
    //     });
    // }

    componentDidMount() {
    }

    render() {
        // var urlParts = window.location.href.split("/")
        // if (typeof (urlParts[3]) == "undefined" || urlParts[3] == "") {
        //     this.state.current = "projects"
        // }
        // else {
        //     this.state.current = urlParts[3]
        // }

        return (
            <div
                // onClick={this.handleClick}
                className={styles["Wrapper"]}>
                <i class={fa_styles["fa"] + " " + fa_styles["fa-bars"] + " " + styles.MenuIcon} onClick={this.props.onMenuIconClick} />

                <div className={styles["firstHalf"]}>

                </div>

                <div className={styles["secondHalf"]}>
                    <NavLink exact to="/signup" className="nav-text"><div className={styles["item"]}>Sign up</div></NavLink>
                    <span className={styles["divider"]}>/</span>
                    <NavLink exact to="/login" className="nav-text"><div className={styles["item"]}>Sign in</div></NavLink>
                </div>

                {/* <Menu.Item key="papa">
                    <a href={window.papa.home} ><Icon type="mail" />{window.papa.title}</a>
                </Menu.Item>
                <Menu.Item key="projects">
                    <NavLink to="/projects" className="nav-text"><Icon type="mail" />Projects</NavLink>
                </Menu.Item>
                <Menu.Item key="groups">
                    <NavLink to="/groups" className="nav-text"><Icon type="mail" />Groups</NavLink>
                </Menu.Item>
                {/* <Menu.Item key="setting" disabled> */}
                {/* <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu> */}
                {/* </Menu.Item> */}
                {/* <Menu.Item key="snipetts">
                    <NavLink to="/snipetts" className="nav-text"><Icon type="mail" />Snippets</NavLink>
                </Menu.Item>
                <Menu.Item key="help">
                    <NavLink to="/help" className="nav-text"><Icon type="mail" />Help</NavLink>
                </Menu.Item>
                <MyInput/> */}
            </div>
        );
    }
}

export default MyTopeNav