
import './App.css';
import { Route,Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Labs from './components/Labs';
import { NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';
function App() {
  return (
<div>

  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
      </li>
      <li>
        <NavLink to="/Support">Support</NavLink>
      </li>
      <li>
        <NavLink to="/Labs">Labs</NavLink>
      </li>
    </ul>
  </nav>
<Routes>
  <Route path="/" element={<div><MainHeader/></div>}>
  <Route index element={<div><Home/></div>}/>
   <Route path="/about" element={<div><About/></div>}/>
   <Route path="/support" element={<div><Support/></div>}/>
   <Route path="/labs" element={<div><Labs/></div>}/>
   <Route path="*" element={<div><NotFound/> </div>}></Route>
  </Route>
</Routes>

</div>
  );
}

export default App;
