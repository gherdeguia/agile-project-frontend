import './App.css';
import Header from './features/components/Header/Header';
import Landing from './features/components/Landing/Landing';
import Footer from "./features/components/Footer/Footer";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
