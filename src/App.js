import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <WelcomeSection/>
    </div>
  );
}

export default App;
