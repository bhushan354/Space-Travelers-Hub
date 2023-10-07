import React, { useState } from 'react'; // Import useState
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom'; // Import NavLink
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import planet from './planet.png';

function App() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

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
                <NavLink
                  exact
                  to="/"
                  className={activeLink === 'Rockets' ? 'activeLink' : 'inactiveLink'}
                  onClick={() => handleLinkClick('Rockets')}
                >
                  Rockets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/missions"
                  className={activeLink === 'Missions' ? 'activeLink' : 'inactiveLink'}
                  onClick={() => handleLinkClick('Missions')}
                >
                  Missions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/MyProfile"
                  className={activeLink === 'MyProfile' ? 'activeLink' : 'inactiveLink'}
                  onClick={() => handleLinkClick('MyProfile')}
                >
                  MyProfile
                </NavLink>
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
