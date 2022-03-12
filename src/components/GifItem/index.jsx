// import { useState } from "react";
import { useContext } from "react";
import GifContext from "../../context";
import "./GifItem.scss";
const GifItem = ({ item }) => {
    const itemUrl = item.images.original.url;
    const { lockedGifs, setLockedGifs, data } = useContext(GifContext);

    const handleOnClick = () => {

        const newObj = {
            indexInArray: data.indexOf(item),
            item: item
        };
        lockedGifs.map(item => item.item.id === newObj.item.id ? console.log("yra toks") : console.log("nera tokio"));
        setLockedGifs([...lockedGifs, newObj]);
        console.log(lockedGifs);
    };
    return (
        <div onClick={handleOnClick}>
            <img src={itemUrl} alt="" />
        </div>
    );
};

export default GifItem;