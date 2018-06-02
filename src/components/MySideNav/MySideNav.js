// import React from 'react';
// // import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
// import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
// import SvgIcon from 'react-icons-kit';

// import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
// import { ic_business } from 'react-icons-kit/md/ic_business';

// const SideNav = withRR4();


// //specify the base color/background of the parent container if needed
// class MySideNav extends React.Component {
//     render() {
//         return <div style={{ background: '#fafafa', color: '#4a518e', width: 220 }}>
//             <SideNav highlightColor='#4a518e' highlightBgColor='#e7e7e7' defaultSelected='sales'>
//                 <Nav id=''>
//                     <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio} /></NavIcon>
//                     <NavText> Project </NavText>
//                 </Nav>
//                 <Nav id='issues'>
//                     <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
//                     <NavText> Issues </NavText>
//                 </Nav>
//                 <Nav id='members'>
//                     <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
//                     <NavText> Members </NavText>
//                 </Nav>
//             </SideNav>
//         </div>
//     }
// }

// export default MySideNav



import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from "react-router-dom";
import 'antd/dist/antd.css'

import MySearchBox from '../MySearchBox/MySearchBox.js'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
        // if (typeof (urlParts[3]) == "undefined" || urlParts[3] == "") {
        //     this.state.current = "projects"
        // }
        // else {
        //     this.state.current = urlParts[3]
        // }

        return (
            <Menu
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
                <Menu.Item key="members">
                    <NavLink to="/members" className="nav-text"><Icon type="mail" />Members</NavLink>
                </Menu.Item>
                {/* <MySearchBox /> */}
            </Menu>
        );
    }
}

export default MySideNav