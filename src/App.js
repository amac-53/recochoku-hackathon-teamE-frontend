import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Home'
import NotFound from './NotFound';

const venue = 'KyotoMojo'

export const VenueContext = React.createContext(venue)

function App() {
  return (
    <VenueContext.Provider value={venue}>
      <BrowserRouter>
        <div style={{ "minHeight": "100%", "position": "relative" }}>
          <Header />
          <Routes>
            <Route exact path={'/:venue/*'} element={<Home />} />
            <Route path={`/*`} element={<NotFound />} />
          </Routes>
          <Footer style={{ "position": "absolute", "bottom": "0" }} />
        </div>
      </BrowserRouter>
    </VenueContext.Provider>
  );
}

export default App;