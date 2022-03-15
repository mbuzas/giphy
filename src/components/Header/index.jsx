import { useContext } from "react";
import GifContext from "../../context";
import "./Header.scss";
const Header = () => {
    const { handleKeyDown } = useContext(GifContext);
    return (
        <header>
            <p>TESTHY</p>
            <div className="info-right">
                <span className="alert">i</span>
                Press <span className="underline">spacebar</span> to shuffle or
            </div>
            <button onClick={handleKeyDown}>Click here</button>
        </header>
    );
};

export default Header;