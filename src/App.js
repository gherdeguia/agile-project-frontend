import './App.css';
import Landing from './features/components/Landing/Landing';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'antd/dist/antd.css';
import {useEffect} from "react";
import {getMovies, getTrendingMovies} from "./features/apis/movies";
import {useDispatch} from "react-redux";
import {AddMovies} from './features/reducers/moviesSlice'
import {getCinemas} from "./features/apis/cinemas";
import {AddCinemas} from "./features/reducers/cinemaSlice";
import {AddTrendings} from "./features/reducers/trendingSlice";
import ScreenTimeCalendar from './features/components/TicketReservation/ScreenTimeCalendar';
import SeatsSelection from './features/components/Seat Reservation/SeatsSelection';
import Receipt from './features/components/Payment/Receipt';
import Payment from './features/components/Payment/Payment';
import Header from "./features/components/Header/Header";
import Footer from "./features/components/Footer/Footer";

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
                <Switch>
                    <Route exact path="/" component={Landing}></Route>
                    <Route exact path="/payment" component={Payment}></Route>
                    <Route exact path="/link2" component={Landing}></Route>
                    <Route exact path="/screening_time" component={ScreenTimeCalendar}></Route>
                    <Route exact path="/seats_selection" component={SeatsSelection}></Route>
                    <Route exact path="/receipt" component={Receipt}></Route>
                    {/* <Route path="*" component={NotFoundPage}></Route> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
