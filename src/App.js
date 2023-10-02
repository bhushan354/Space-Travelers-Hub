import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <nav>
        <div className="navContainer">
          <div>
            <li className="heading">
              Space Travelers Hub
            </li>
          </div>

          <div className="linksContainer">
            <li>
              <Link to="/rockets">Rockets</Link>
            </li>
            <li>
              <Link to="/missions">Missions</Link>
            </li>
            <li>
              <Link to="/">MyProfile</Link>
            </li>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/" element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
