/* eslint-disable no-undef */
import "./App.scss";

function App() {
  if (process.env.NODE_ENV !== "production") {
    console.log(process.env.GIPHY_API_KEY);
  }
  return (
    <div className="App">
      asdasd
    </div>
  );
}

export default App;
