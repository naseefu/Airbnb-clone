import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import RoomDetails from './Components/RoomDetails/RoomDetails';

function App() {
  return (
    <div className="App px-10">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/:categories"} element={<Home/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
