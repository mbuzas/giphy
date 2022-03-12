// import { useState } from "react";
import "./GifItem.scss";
const GifItem = ({ item }) => {
    // const url = item.url;
    // const [s, sets] = useState(second)
    return (
        <div>
            {item}
            {/* <iframe src={item} alt="" /> */}
            <img src={item} alt="" />
        </div>
    );
};

export default GifItem;