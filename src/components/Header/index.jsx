import "./Header.scss";
const Header = () => {
    return (
        <header>
            <p>TESTHY</p>
            <div className="info-right">
                <span className="alert">i</span>
                Press <span className="underline">spacebar</span> to shuffle or
            </div>
            <button>Click here</button>
        </header>
    );
};

export default Header;