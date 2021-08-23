import React from 'react'
import {Tabs} from "antd";
import Search from "antd/lib/input/Search";

const { TabPane } = Tabs;

function SearchBar() {
    return (
        <div style={{width:"50%", margin:"auto"}}>
            <Tabs type="card">
                <TabPane tab="Movies" key="1">
                    <Search allowClear />
                </TabPane>
                <TabPane tab="Cinemas" key="2">
                    <Search allowClear />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default SearchBar
