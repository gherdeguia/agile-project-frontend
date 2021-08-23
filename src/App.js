import './App.css';
import logo from "./logo.png";
import Landing from './features/components/Landing/Landing';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import 'antd/dist/antd.css';

function App() {
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
