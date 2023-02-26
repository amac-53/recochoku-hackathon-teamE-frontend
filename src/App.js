import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import List from './List'
import Calender from './Calender';
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
            <Route exact path={'/:venue/list'} element={<List />} />
            <Route exact path={'/:venue/calender'} element={<Calender />} />
            <Route path={`/*`} element={<NotFound />} />
          </Routes>
          <Footer style={{ "position": "absolute", "bottom": "0" }} />
        </div>
      </BrowserRouter>
    </VenueContext.Provider>
  );
}

export default App;