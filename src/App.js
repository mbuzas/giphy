import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable no-undef */
import "./App.scss";
import GifItem from "./components/GifItem";

const App = () => {

  if (process.env.NODE_ENV !== "production") {
    console.log(process.env.GIPHY_API_KEY);
  }

  const getRandomKey = () => {
    return Math.floor(Math.random() * 1000000);
  };
  const getRandomQuery = () => {
    return Math.floor(Math.random() * 100);
  };
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("lol");
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



        console.log(
          [...response.data.data].sort((a, b) => {
            const newArr = [];
            // return (parseInt(a.import_datetime) - parseInt(b.import_datetime));
            // const importedA = ;
            // const importedB = ;
            // return importedA - importedB;
            // console.log(importedA, importedB);
            if (importedA < importedB) {
              return -1;
              // }
              // if (importedA > importedB) {
              //   return 1;
              // }
              // return 0;

            })
        );



        setData(response.data.data);
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


  return (
    <div className="App">
      {data && data.map(item => {
        // console.log(item);
        return (
          <>
            <GifItem item={item.images.original.url} key={getRandomKey()} />
          </>
        );
      })}
    </div>
  );
};

export default App;
