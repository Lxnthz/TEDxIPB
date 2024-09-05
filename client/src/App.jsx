import { Routes, Route } from 'react-router-dom';

// import component 
import Navbar from './components/Navbar';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Events from './pages/Events';
import Merchandise from './pages/Merchandise';
import Tickets from './pages/Tickets';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MainTheme from './pages/Themes/MainTheme';
import SubOne from './pages/Themes/SubthemeOne';
import SubTwo from './pages/Themes/SubthemeTwo';
import SubThree from './pages/Themes/SubthemeThree';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/main-theme" element={<MainTheme />} />
          <Route path="/subtheme-one" element={<SubOne />} />
          <Route path="/subtheme-two" element={<SubTwo />} />
          <Route path="/subtheme-three" element={<SubThree />} />
        <Route path="/events" element={<Events />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  );
}

export default App;
