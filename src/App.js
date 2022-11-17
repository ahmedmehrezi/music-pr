import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './components/style.css'
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import {TopArtists, AroundYou, Discover, Search, TopCharts } from '../src/pages';
import './App.css'
const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="app">
      <Sidebar />
      <div className="l">
        <Searchbar />
        
        <div className="mm">
          <div className="nn">
            <Routes>
              <Route path="/" element={<Discover/>} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="top" >
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className=" music">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
