import { Routes, Route } from 'react-router-dom';

// import component 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Events from './pages/Events';
import Merchandise from './pages/Merchandise';
import Tickets from './pages/Tickets';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
