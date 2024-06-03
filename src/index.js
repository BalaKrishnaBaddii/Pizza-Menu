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
// const style = {
//   color: "Yellow",
//   fontSize: "52px",
//   textTransform: "uppercase",
// };
// ***************************************************

function Header() {
  return (
    <header className="header">
      <h1 className="header h1"> Pizza House </h1>
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
        // React Fregment will allow to combine two elements.
        // <React.Fragment>
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu please comback later!</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
      <div>
        <h3>{pizzaObj.name} </h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : "$" + pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const startHour = 13;
  const endHour = 23;
  const isOpen = hour >= startHour && hour <= endHour;
  console.log(isOpen + " here ");

  // if (hour >= startHour && hour <= endHour) alert("We're Currently Open");
  // else alert("Sorry we're closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order endHour={endHour} startHour={startHour} />
      ) : (
        <p>
          We're Happy to welcome you between{" "}
          {startHour < 12 ? startHour + ":00 AM" : startHour + ":00 PM"} and{" "}
          {endHour === 0
            ? endHour + 12 + ":00 AM"
            : endHour >= 12
            ? endHour - 12 + ":00 PM"
            : endHour - 12 + ":00 AM"}
        </p>
      )}
      {/* {new Date().toLocaleDateString()}. We're Currently Open{" "} */}
    </footer>
  );
  // return React.createElement("footer", null, "We ar'e Opened");
}

function Order({ startHour, endHour }) {
  console.log();
  return (
    <div className="order">
      <p>
        We're currently Opened from{" "}
        {startHour < 12 ? startHour + ":00 AM" : startHour - 12 + ":00 PM"} till{" "}
        {endHour >= 12 ? endHour - 12 + ":00 PM" : endHour + ":00 AM"}. Come
        visit or order online{" "}
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
