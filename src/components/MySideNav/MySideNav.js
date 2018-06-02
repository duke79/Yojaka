import React from 'react';
// import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

const SideNav = withRR4();


//specify the base color/background of the parent container if needed
class MySideNav extends React.Component {
    render() {
        return <div style={{ background: '#fafafa', color: '#4a518e', width: 220 }}>
            <SideNav highlightColor='#4a518e' highlightBgColor='#e7e7e7' defaultSelected='sales'>
                <Nav id=''>
                    <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio} /></NavIcon>
                    <NavText> Home </NavText>
                </Nav>
                <Nav id='about'>
                    <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
                    <NavText> About </NavText>
                </Nav>
                <Nav id='Topics'>
                    <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon>
                    <NavText> Topics </NavText>
                </Nav>
            </SideNav>
        </div>
    }
}

export default MySideNav