import { useContext, useEffect, useState } from "react";
import GifContext from "../../context";
import lock from "../../assets/images/lock.svg";
import unlock from "../../assets/images/unlock.svg";
import "./GifItem.scss";

const GifItem = ({ item }) => {
    const itemUrl = item.images.original.url;
    const { lockedGifs, setLockedGifs, data } = useContext(GifContext);
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        lockedGifs.filter(obj => (obj.item.id === item.id) ? setIsLocked(true) : false);
    }, [lockedGifs]);

    const addSelectedGifToMemory = (selectedGif) => {
        lockedGifs.map(item => (item.item.id === selectedGif.item.id) ?
            setLockedGifs(lockedGifs.filter(item => (item.item.id !== selectedGif.item.id)))
            : false,
            setLockedGifs([...lockedGifs, selectedGif]),
        );
    };

    const handleOnClick = () => {
        setIsLocked(!isLocked);
        const selectedGif = {
            indexInArray: data.indexOf(item),
            item: item
        };
        addSelectedGifToMemory(selectedGif);
    };

    return (
        <div className="gif-item" onClick={handleOnClick} >
            <img src={itemUrl} alt="" />
            <div className="lock-info">
                <img src={isLocked ? unlock : lock} alt="" />
                <p>{isLocked ? "Unlock" : "Click to Lock"}</p>
            </div>
        </div>
    );
};

export default GifItem;