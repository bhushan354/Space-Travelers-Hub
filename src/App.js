import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MyProfile />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
