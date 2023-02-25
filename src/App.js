import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Home'
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div style={{ "minHeight": "100%", "position": "relative"}}>
        <Header />
        <Routes>
          <Route path={'/:cat'} element={<Home />} />
          <Route path={`/*`} element={<NotFound />} />
        </Routes>
        <Footer style={{"position": "absolute", "bottom": "0"}}/>
      </div>
    </BrowserRouter>
  );
}

export default App;