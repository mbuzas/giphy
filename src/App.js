import axios from "axios";
import { useEffect, useState } from "react";
import GifContext from "./context";
/* eslint-disable no-undef */
import "./App.scss";
import GifItem from "./components/GifItem";
import Header from "./components/Header";

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("lithuania");

  const storage = JSON.parse(localStorage.getItem("lockedItems"));
  const [lockedGifs, setLockedGifs] = useState(storage || []);

  const getRandomKey = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const getRandomQuery = () => {
    return Math.floor(Math.random() * 100);
  };


  // const sortGifsByImportDate = (response) => {
  //   [...response.data.data].slice().sort((a, b) => {
  //     new Date(a.import_datetime) - new Date(b.import_datetime);
  //   });
  // };

  const switchGifsWithLockedOnes = (sortedData) => {
    lockedGifs.map(lockedItem => {
      [...sortedData, sortedData[lockedItem.indexInArray.toString()] = lockedItem.item];
    });
  };

  const params = {
    params: {
      q: query,
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      limit: 15
    }
  };

  const fetchGifs = () => {
    const url = "http://api.giphy.com/v1/gifs/search";
    axios.get(url, params)
      .then(function (response) {
        // const sortedData = sortGifsByImportDate(response);
        const sortedData = [...response.data.data].slice().sort((a, b) => {
          new Date(a.import_datetime) - new Date(b.import_datetime);
        });

        switchGifsWithLockedOnes(sortedData);
        setData(sortedData);
      }).catch(function (error) {
        console.error(error);
      });
  };

  const handleKeyDown = () => {
    setQuery(getRandomQuery());
  };

  useEffect(() => {
    fetchGifs();
    document.onkeydown = (e) => {
      if (e.code === "Space" && e.target == document.body) {
        e.preventDefault();
        handleKeyDown();
      }
    };
  }, [query]);

  useEffect(() => {
    localStorage.setItem("lockedItems", JSON.stringify(lockedGifs));
  }, [lockedGifs]);

  const initialState = {
    lockedGifs: lockedGifs,
    setLockedGifs,
    data: data,
    handleKeyDown
  };

  return (
    <GifContext.Provider value={initialState}>
      <div className="App">
        <Header />
        <main>
          {data && data.map(item => {
            return (
              <GifItem item={item} key={getRandomKey()} ></GifItem>
            );
          })}
        </main>
      </div>
    </GifContext.Provider>
  );
};

export default App;
