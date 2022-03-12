// import { useState } from "react";
import { useContext } from "react";
import GifContext from "../../context";
import "./GifItem.scss";
const GifItem = ({ item }) => {
    const itemUrl = item.images.original.url;
    const { lockedGifs, setLockedGifs, data } = useContext(GifContext);

    const handleOnClick = () => {
        // console.log(item.images);

        const lockedObject = {
            indexInArray: data.indexOf(item),
            item: item
        };
        console.log(lockedObject);
        lockedGifs.filter(item => console.log(item) ? console.log("yra toks") : console.log("nera tokio"));
        setLockedGifs([...lockedGifs, lockedObject]);
        console.log(lockedGifs);
    };
    return (
        <div onClick={handleOnClick}>
            <img src={itemUrl} alt="" />
        </div>
    );
};

export default GifItem;