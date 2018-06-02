import React from 'react';
import { Input, Select, Icon } from 'antd';
import 'antd/dist/antd.css'

import { Layout } from 'antd';
const { Sider, Content } = Layout;

const Option = Select.Option;

class SearchBox extends React.Component {
    state = {
        defaultSelectedValue: "Lucy",
        selectValues: ["Jack", "Lucy"]
    }

    selected(value) {
        console.log(`selected ${value}`);
    }

    searched(value) {
        console.log(`searched ${value.target.value}`);
    }

    populateSortBy() {
        var items = [];
        if (typeof (this.state.selectValues) != 'undefined') {
            for (var i = 0; i < this.state.selectValues.length; i++) {
                items.push(<Option value={this.state.selectValues[i]}>{this.state.selectValues[i]}</Option>);
            }
        }
        return items;
    }

    render() {
        return <div>
            <div style={{ paddingTop: 16, paddingBottom: 16 }}>
                <Layout>
                    <Content>
                        <Input placeholder="Search or filter results..."
                            size="large"
                            onChange={this.searched}
                            onPressEnter={this.searched} />
                    </Content>
                    <Sider style={{ backgroundColor: "#f0f2f5" }}>
                        <Select style={{ width: 120 }} onChange={this.selected} size="large"
                            defaultValue={this.state.defaultSelectedValue}>
                            {this.populateSortBy()}
                        </Select>
                    </Sider>
                </Layout>
            </div>
        </div>
    }
}

export default SearchBox