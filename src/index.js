import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// STyles..
//************************************
const style = {
  color: "Yellow",
  fontSize: "52px",
  textTransform: "uppercase",
};
// ***************************************************

function Header() {
  return (
    <header className="header">
      <h1 style={style}> Pizza House </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzaNum = pizzas.length;

  return (
    <main className="menu">
      <h2> Our Menu </h2>
      {pizzaNum > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu please comback later!</p>
      )}
    </main>
  );
}

function Pizza(props) {
  if (props.pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.photoName} />
      <div>
        <h3>{props.pizzaObj.name} </h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>${props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const startHour = 10;
  const endHour = 22;
  const isOpen = hour >= startHour && hour <= endHour;
  console.log(isOpen);

  // if (hour >= startHour && hour <= endHour) alert("We're Currently Open");
  // else alert("Sorry we're closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order endHour={endHour} startHour={startHour} />
      ) : (
        <p>
          We're Happy to welcome you between {startHour} and {endHour}:00
        </p>
      )}
      {/* {new Date().toLocaleDateString()}. We're Currently Open{" "} */}
    </footer>
  );
  // return React.createElement("footer", null, "We ar'e Opened");
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're currently Opened till {props.endHour}:00. come visit or order
        online{" "}
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />);
