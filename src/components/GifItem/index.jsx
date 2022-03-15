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
        lockedGifs.filter(obj => obj.item.id === item.id ? setIsLocked(true) : "");
    }, [lockedGifs]);

    const handleOnClick = () => {
        setIsLocked(!isLocked);
        const newObj = {
            indexInArray: data.indexOf(item),
            item: item
        };
        lockedGifs.map(item => item.item.id === newObj.item.id ?
            setLockedGifs(lockedGifs.filter(item => item.item.id !== newObj.item.id))
            :
            console.log(""),
            setLockedGifs([...lockedGifs, newObj]),

        );

    };
    return (
        <div className="gif-item" onClick={handleOnClick} >
            <img src={itemUrl} alt="" />
            <div className="lock-info">
                {isLocked ?
                    <img src={unlock} alt="" />
                    :
                    <>
                        <img src={lock} alt="" />
                        <p>Click to Lock</p>
                    </>}

            </div>
        </div>
    );
};

export default GifItem;