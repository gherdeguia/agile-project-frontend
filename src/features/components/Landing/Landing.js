import Footer from '../Footer/Footer.js';
import React from 'react'
import SearchForm from "./SearchForm";
import Trending from "./Trending"
import Header from "../Header/Header";
import background from "./movie-bg.png";


function Landing() {
    return (
        <div>
            <Header/>
            <div className="landing-wrapper" style={{backgroundImage: `url(${background})`, backgroundSize: '100%'}}> 
                <Trending/>
                <SearchForm/>
                <Footer/>
            </div>
        </div>
        
    )
}

export default Landing
