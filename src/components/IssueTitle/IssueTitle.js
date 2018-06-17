import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css'
import { Info, Title, IssuableInfo, Reference, Authored, Author } from './IssueTitleComponents.js'

import $ from 'jquery'

import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);


class IssueTitle extends React.Component {
    onLayoutChange(layout, layouts) {
        if (layout[1].w === 0 && layout[1].h === 0) {
            $("#authored")[0].style.visibility = "hidden"
        }
        else {
            $("#authored")[0].style.visibility = "visible"
        }
    }

    render() {
        var layoutLG = [
            { i: 'reference', x: 0, y: 0, w: 1, h: 1, static: true },
            { i: 'authored', x: 1, y: 0, w: 3, h: 1, static: true }
        ];
        var layoutXXS = [
            { i: 'reference', x: 0, y: 0, w: 1, h: 1, static: true },
            { i: 'authored', x: 0, y: 0, w: 0, h: 0, static: true }
        ];
        return <div>
            <Info>
                <Title>
                    {"Create batch process for emailing"}
                </Title>
                <IssuableInfo>
                    <ResponsiveGridLayout className="layout"
                        layouts={{ lg: layoutLG, xxs: layoutXXS }}
                        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                        rowHeight={60}
                        onLayoutChange={this.onLayoutChange}
                    >
                        <Reference key="reference">
                            <a href="#">{"#43"}</a>
                        </Reference>
                        <Authored key="authored" id="authored">
                            {"opened 3 weeks ago by"}
                            <Author>
                                {"Fabian"}
                            </Author>
                        </Authored>
                    </ResponsiveGridLayout>
                </IssuableInfo>
            </Info>
        </div>
    }
}

export default IssueTitle