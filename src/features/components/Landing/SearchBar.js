import React from 'react'
import {Tabs} from "antd";
import Search from "antd/lib/input/Search";

const { TabPane } = Tabs;

function SearchBar() {

    function movieSearch(event) {

    }

    function cinemaSearch(event) {

    }

    return (
        <div style={{width:"50%", margin:"auto"}}>
            <Tabs type="card">
                <TabPane tab="Movies" key="movies">
                    <Search onSearch={movieSearch}/>
                </TabPane>
                <TabPane tab="Cinemas" key="cinemas">
                    <Search onSearch={cinemaSearch}/>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default SearchBar
