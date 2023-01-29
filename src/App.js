import './App.css';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route  path='/'  element={<Home />} />
        <Route  path='/dashboard'  element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
