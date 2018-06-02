import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css'

const Search = Input.Search;

class MySearchBox extends React.Component {
    render() {
        return <div>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
            {/* <br /><br />
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      enterButton
    />
    <br /><br />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    /> */}
        </div>
    }
}

export default MySearchBox