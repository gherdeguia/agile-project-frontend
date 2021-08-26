import Footer from '../Footer/Footer.js';
import React from 'react'
import SearchForm from "./SearchForm";
import Trending from "./Trending";

function Landing() {
    return (
        <div>
            <Trending/>
            <SearchForm/>
            <Footer/>
        </div>
    )
}

export default Landing
