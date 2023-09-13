import { Routes, Route } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SingleBlog from './components/SingleBlog';
import AboutContact from './pages/AboutContact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/singleblog/:id" element={<SingleBlog/>} />
          <Route exact path="/aboutcontact" element={<AboutContact/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
