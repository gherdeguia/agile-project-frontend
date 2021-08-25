import './App.css';
import logo from "./logo.png";
import Landing from './features/components/Landing/Landing';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import 'antd/dist/antd.css';
import {useEffect} from "react";
import {getMovies, getTrendingMovies} from "./features/apis/movies";
import {useDispatch} from "react-redux";
import {AddMovies} from './features/reducers/moviesSlice'
import {getCinemas} from "./features/apis/cinemas";
import {AddCinemas} from "./features/reducers/cinemaSlice";
import {AddTrendings} from "./features/reducers/trendingSlice";
import Payment from './features/components/Payment/Payment';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        getMovies().then((response) => {
            dispatch(AddMovies(response.data));
        })

        getCinemas().then((response) => {
            dispatch(AddCinemas(response.data));
        })

        getTrendingMovies().then((response) => {
            dispatch(AddTrendings(response.data));
        })
    })

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar bg="white">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                width="160px"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Nav>
                            <Link to="/">
                                <b>Sign up</b>&nbsp;
                                <FontAwesomeIcon icon={faUserCircle}/>

                            </Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Landing}></Route>
                    <Route exact path="/payment" component={Payment}></Route>
                    <Route exact path="/link2" component={Landing}></Route>
                    {/* <Route path="*" component={NotFoundPage}></Route> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
