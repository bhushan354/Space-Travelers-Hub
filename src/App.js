import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import planet from './planet.png';

function App() {
  return (
    <>
      <div className="wholeSiteContainer">
        <nav>
          <div className="navContainer">
            <div className="logoHead">
              <img src={planet} alt="planetImg" className="planet" />
              <li className="heading">Space Travellers&apos; Hub</li>
            </div>

            <div className="linksContainer">
              <li>
                <Link to="/">Rockets</Link>
              </li>
              <li>
                <Link to="/missions">Missions</Link>
              </li>
              <li>
                <Link to="/MyProfile">MyProfile</Link>
              </li>
            </div>
          </div>
        </nav>
        <hr />
        <div className="container">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
