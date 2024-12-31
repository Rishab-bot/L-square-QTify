import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Section from './Components/Section/Section.jsx';
import FilterSection from './Components/FilterSection/FilterSection.jsx';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './api/api';
import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState(0);
  const [error, setError] = useState(null);

  const genresMap = {
    0: "", // All genres
    1: "rock",
    2: "pop",
    3: "jazz",
    4: "blues"
  };

  const generateTopAlbumSongs = async () => {
    try {
      const res = await fetchTopAlbums();
      setTopAlbumSongs(res);
    } catch (error) {
      setError("Failed to load top albums.");
    }
  };

  const generateNewAlbumSongs = async () => {
    try {
      const res = await fetchNewAlbums();
      setNewAlbumSongs(res);
    } catch (error) {
      setError("Failed to load new albums.");
    }
  };

  const generateSongs = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredData(res);
    } catch (error) {
      setError("Failed to load songs.");
    }
  };

  const generateNewSongs = (index) => {
    const key = genresMap[index] || "";
    const newSongsArray = songsData.filter(song =>
      key === "" || song.genre.key === key
    );
    setFilteredData(newSongsArray);
  };

  const handleChangeIndex = async (newValue) => {
    setValue(newValue);
    generateNewSongs(newValue);
  };

  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
    generateSongs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        {error && <div className={styles.error}>{error}</div>}
        <Section type="album" title="Top Albums" data={topAlbumSongs} />
        <Section type="album" title="New Albums" data={newAlbumSongs} />
        <FilterSection
          type="song"
          title="Songs"
          value={value}
          filteredData={filteredData}
          handleChangeIndex={handleChangeIndex}
        />
      </div>
    </div>
  );
}

export default App;
