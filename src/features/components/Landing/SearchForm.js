import React, {useState} from 'react'
import {Tabs} from "antd";
import Search from "antd/lib/input/Search";
import MovieResult from "./MovieResult";
import {useSelector} from 'react-redux';

import {selectMovies} from "../../reducers/moviesSlice";

const {TabPane} = Tabs;

function SearchForm() {

    const movieList = useSelector(selectMovies);
    const [movieText, setMovieText] = useState("|");

    function movieSearch(event) {
        setMovieText(event)
    }

    function cinemaSearch(event) {

    }

    return (
        <div className="search-form" style={{width: "50%", margin: "auto"}}>
            <Tabs type="card">
                <TabPane tab="Movies" key="movies">
                    <Search onSearch={movieSearch}/>
                </TabPane>
                <TabPane tab="Cinemas" key="cinemas">
                    <Search onSearch={cinemaSearch}/>
                </TabPane>
            </Tabs>
            <div className={`search-result `}>
                {
                    movieList.filter((singeMovie) => singeMovie.name.toLowerCase().includes(movieText.toLowerCase()))
                        .map((singleMovie) => (
                            <MovieResult movie={singleMovie}/>
                        ))
                }
            </div>
        </div>

    )
}

export default SearchForm
