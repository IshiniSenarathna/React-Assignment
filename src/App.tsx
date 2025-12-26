import "./App.css";
import ListGroup from "./components/ListGroup";

const items = [
  { id: 1, code: "EC21033", city: "Kurunegala" }, // your data (first)
  { id: 2, code: "EMP002", city: "Colombo" },
  { id: 3, code: "EMP003", city: "Kandy" },
];

function App() {
  const handleItemClick = (item: (typeof items)[number]) => {
    console.log("Selected:", item);
  };

  return (
    <div>
      <ListGroup
        heading="Students & Cities"
        items={items}
        onItemClick={handleItemClick}
      />
    </div>
  );
}

export default App;

/* pdf1
import "./App.css";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <>
      <div>
        <HelloWorld />
      </div>
    </>
  );
}
  export default App;*/


