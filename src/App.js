import MainPage from "./main-page/mainPage"
import "./App.css"
import Counter from "./component/counter"
function App() {
  return (
    <>

    <div className="App">
      <MainPage message = "Hello everybody"/>
      <br />
      <h2 className="text">Introduction your page</h2>
      <b />
    </div>
      <Counter />
    </>
  );
}

export default App;
