// import logo from "./logo.svg";
import "./App.css";
// import HellowWorld from "./components/HelloWorld";
import Navbar from "./components/Navbar";
import Card from "./components/Card/Card";
// import ReactStateTutorial from "./components/ReactStateTutorial";
import FormsTutorial from "./components/FormsTutorial";
import APITutorial from "./components/APITutorial";

// import data
import data from "./cardData";

function App() {
  const cards = data.map((item) => {
    // generalize the invokation of the Card component inside App.jst
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        city={item.location}
        title={item.title}
        price={item.price}
        openSlots={item.openSlots}
      />
    ); // end of the map function's callback body
  });

  return (
    <div className="App">
      <Navbar />
      {/* <ReactStateTutorial /> */}
      <FormsTutorial />
      <APITutorial />
      {/* <section className="product-card-parent-container">{cards}</section> */}
    </div>
  );
}

export default App;
