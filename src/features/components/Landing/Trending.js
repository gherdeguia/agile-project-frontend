import React, {useState} from 'react'
import {selectTrendings} from "../../reducers/trendingSlice";
import {useSelector} from "react-redux";
import Slider from "react-slick";
import "./Trending.css"
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Trending() {

    const trendingList = useSelector(selectTrendings);

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: 0,
        centerMode: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return (
        <div className="trending-div">
            <h3 style={{color:"white" , opacity:"1"}}><b >Trending</b><span style={{fontWeight:"200"}}> Movies</span></h3>
            <hr style={{color:"white", height:"2px", width:"150px",margin:"auto", marginBottom:"20px", opacity:"1"}}/>
            <Slider {...settings}>
                {
                    trendingList.map((movie, idx) => (
                        <div key={movie.id} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <img style={{width: "inherit"}}
                                 src={movie.poster}
                                 alt={movie.name}/>
                        </div>
                    ))
                }
            </Slider>
        </div>

    )
}

export default Trending
