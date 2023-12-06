import React from "react";
import { useState } from "react";
import trackList from "../../assets/trackList";
import styles from "./mainPage.module.scss";
import Track from "../../components/Track/Track";
import { Input } from "@mui/material";

const runSearch = (query) => {
  if (!query) {
    return trackList;
  }
  const loweCaseQuery = query.toLowerCase();

  return (
    trackList.filter((track) =>
      track.title.toLowerCase().includes(loweCaseQuery)
    ) ||
    trackList.filter((track) =>
      track.artists.toLowerCase().includes(loweCaseQuery)
    )
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(trackList);

  const handleChange = (e) => {
    const foundTracks = runSearch(e.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className={styles.search}>
      <>
        <Input
          className={styles.input}
          placeholder="Find your favorite track!"
          onChange={handleChange}
        />
      </>
      <div className={styles.list}>
        {tracks.map((track) => (
          <Track {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
