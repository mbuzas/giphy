import axios from "axios";
import { useEffect, useState } from "react";
import GifContext from "./context";
/* eslint-disable no-undef */
import "./App.scss";
import GifItem from "./components/GifItem";

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("lol");
  if (process.env.NODE_ENV !== "production") {
    console.log(process.env.GIPHY_API_KEY);
  }

  const getRandomKey = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const [lockedGifs, setLockedGifs] = useState([]);


  const getRandomQuery = () => {
    return Math.floor(Math.random() * 100);
  };

  const params = {
    params: {
      q: query,
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      limit: 12,
      responseType: "text/html",
    }
  };
  const fetchGifs = () => {
    const url = "http://api.giphy.com/v1/gifs/search";
    axios.get(url, params)
      .then(function (response) {
        const sortedData =
          [...response.data.data].slice().sort((a, b) => {
            return new Date(a.import_datetime) - new Date(b.import_datetime);
          });
        // sortedData.map(item => {
        //   console.log(item.import_datetime);
        // });
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
    document.onkeydown = handleKeyDown;
  }, [query]);

  const initialState = {
    lockedGifs: lockedGifs,
    setLockedGifs,
    data: data,
  };


  return (
    <GifContext.Provider value={initialState}>
      <div className="App">
        {data && data.map(item => {
          return (

            <GifItem item={item} key={getRandomKey()} ></GifItem>

          );
        })}
      </div>
    </GifContext.Provider>
  );
};

export default App;
