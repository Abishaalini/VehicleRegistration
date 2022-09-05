
import './App.css';
import ListVehicleComponent from './components/ListVehicleComponent';
import AddVehicleComponent from './components/AddVehicleComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
            <div>
              <Header/>
                    <div className="container">
                      <Routes>
                        <Route path="/" exact element = {<AddVehicleComponent/>}></Route>
                        <Route path="/vehicles"  element = {<ListVehicleComponent/>}></Route>
                        <Route path="/add-vehicles" element = {<AddVehicleComponent/>}></Route>
                        <Route path="/update-vehicles/:Id" element = {<AddVehicleComponent/>}></Route>
                        
                        
                      </Routes>
                    </div>
              <Footer/>
          </div>
      </Router>
    </div>
    
  );
}

export default App;
