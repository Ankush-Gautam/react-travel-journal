import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  //mapping items through data file
  const Cards = data.map(item => {
    return (
      <Card
        key={item.title}
        {...item}
      />
    )
  });

  return (
    <div className="App">
      <Navbar />
      {Cards}
    </div>
  );
}

export default App;
