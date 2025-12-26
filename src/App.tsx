import React from 'react'; 
import Header from './components/Header'; 
import ListEmployeeComponent from './components/ListEmployeeComponent'; 
import Footer from './components/Footer';  

const App: React.FC = () => { 
return ( 
<div> 
<Header /> 
<ListEmployeeComponent /> 
<Footer />
</div> 
); 
}; 
export default App; 
/*part4*/ 
/*import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <div>
      <ListEmployeeComponent />
    </div>
  );
}

export default App;*/


/* pdf3*/
/*
import Hi from "./components/Hi";

function App() {
  return (
    <div className="container mt-3">
      <Hi>
        <h3>Welcome EC21033 - Ishini Senarathna</h3>
        <p>This is the Part 3 reusable component example.</p>
      </Hi>
    </div>
  );
}

export default App;
*/
/* part2*/
/*
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

export default App;*/

/* pdf1*/
/*import "./App.css";
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


