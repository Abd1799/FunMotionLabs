import './App.css';
import Banner from './components/Banner';
import CustomerReviews from './components/CustomerReviews';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import WhatweOfferSection from './components/WhatweOfferSection';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <WelcomeSection/>
    <WhatweOfferSection/>
    <CustomerReviews/>
    </div>
  );
}

export default App;
