// import { useState } from "react";
import { useContext } from "react";
import GifContext from "../../context";
import lock from "../../assets/images/unlock.svg";
import "./GifItem.scss";
const GifItem = ({ item }) => {
    const itemUrl = item.images.original.url;
    const { lockedGifs, setLockedGifs, data } = useContext(GifContext);

    const handleOnClick = () => {

        const newObj = {
            indexInArray: data.indexOf(item),
            item: item
        };
        lockedGifs.map(item => (item.item.id === newObj.item.id) ?
            setLockedGifs(lockedGifs.filter(item => item.item.id !== newObj.item.id))
            :
            console.log(""),
            setLockedGifs([...lockedGifs, newObj])
        );
        // lockedGifs.forEach(item => {
        //     if (item.item.id === newObj.item.id) {
        //         setLockedGifs(lockedGifs.filter(item => item.item.id !== newObj.item.id));
        //     } else setLockedGifs([...lockedGifs, newObj]);
        // }
        // );
    };
    return (
        <div className="gif-item" onClick={handleOnClick}>
            <img src={itemUrl} alt="" />
            <div className="lock-info"><img src={lock} alt="" /><p>Click to Lock</p></div>
        </div>
    );
};

export default GifItem;