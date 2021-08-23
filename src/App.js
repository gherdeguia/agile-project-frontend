import './App.css';
import logo from "./logo.png";
import Landing from './features/components/Landing/Landing';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import 'antd/dist/antd.css';
import {useEffect} from "react";
import {getMovies} from "./features/apis/movies";
import {useDispatch} from "react-redux";
import {AddMovies} from './features/reducers/moviesSlice'

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        getMovies().then((response) => {
            dispatch(AddMovies(response.data));
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
                            <Link>
                                <b>Sign up</b>&nbsp;
                                <FontAwesomeIcon icon={faUserCircle}/>

                            </Link>
                        </Nav>
                    </Container>
                </Navbar>


                <Switch>
                    <Route exact path="/" component={Landing}></Route>
                    <Route exact path="/link1" component={Landing}></Route>
                    <Route exact path="/link2" component={Landing}></Route>
                    {/* <Route path="*" component={NotFoundPage}></Route> */}
                </Switch>

            </BrowserRouter>


        </div>
    );
}

export default App;
