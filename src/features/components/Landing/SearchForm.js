import React, {useState} from 'react'
import {Tabs} from "antd";
import Search from "antd/lib/input/Search";
import MovieResult from "./MovieResult";
import {useSelector} from 'react-redux';

import {selectMovies} from "../../reducers/moviesSlice";
import {selectCinemas} from "../../reducers/cinemaSlice";
import CinemaResult from "./CinemaResult";

const {TabPane} = Tabs;

function SearchForm() {

    const movieList = useSelector(selectMovies);
    const cinemaList = useSelector(selectCinemas);
    const [movieText, setMovieText] = useState("|");
    const [cinemaText, setCinemaText] = useState("|");

    function movieSearch(event) {
        if (event !== "") {
            setCinemaText("|")
            setMovieText(event)
        }
    }

    function getAvialableCinema(singleMovie) {
        return cinemaList.filter((cinema) =>
            cinema.movies.filter((movie) => movie.name.includes(singleMovie.name)).length !== 0
        )
    }

    function cinemaSearch(event) {
        if (event !== "") {
            setMovieText("|")
            setCinemaText(event)
        }
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
                    movieList.filter((singleMovie) => singleMovie.name.toLowerCase().includes(movieText.toLowerCase()))
                        .map((singleMovie) => (
                            <div key={singleMovie.id}>
                                <MovieResult movie={singleMovie} cinemas={getAvialableCinema(singleMovie)}/>
                            </div>
                        ))
                }
                {
                    cinemaList.filter((singleCinema) => singleCinema.name.toLowerCase().includes(cinemaText.toLowerCase()))
                        .map((singleCinema) => (
                            <CinemaResult key={singleCinema.id} cinema={singleCinema}/>
                        ))
                }
            </div>
        </div>

    )
}

export default SearchForm
