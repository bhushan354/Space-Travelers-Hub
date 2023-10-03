import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <header>
        <div className="title">
          <div className="container-title">
            <h1 className="store">Space X</h1>
            <ul>
              <li>
                <NavLink to="/" className="current">Home</NavLink>
              </li>
              <li>
                <NavLink to="/rockets" className="current">Rockets</NavLink>
              </li>
              <li>
                <NavLink to="/missions" className="current">Missions</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
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
