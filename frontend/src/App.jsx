import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import About from './pages/About';
import Blog from './pages/Blog';
import Community from './pages/Community';
import Events from './pages/Events';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Founder from './pages/Founder';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/founder" element={<Founder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
