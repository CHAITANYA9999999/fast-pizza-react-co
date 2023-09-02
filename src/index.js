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
    name: "Margherita Pizza",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Spinaci Pizza",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Funghi Pizza",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Salamino Pizza",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Prosciutto Pizza",
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

function Header() {
  // const style = { color: "red", fontSize: "50px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <div>
        <h2>Our Menu</h2>

        {/* {numPizzas && ( */}
        {numPizzas > 0 ? (
          <React.Fragment key="">
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious
            </p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza singlePizza={pizza} key={pizza.name} />
              ))}
            </ul>
          </React.Fragment>
        ) : (
          <p>We're still working on the menu</p>
        )}

        {/* <Pizza pizzaName={pizzaData[0]} />
        <Pizza pizzaName={pizzaData[1]} />
        <Pizza pizzaName={pizzaData[2]} />
        <Pizza pizzaName={pizzaData[3]} /> */}
        {/* <Footer /> */}
      </div>
    </main>
  );
}

function Pizza({ singlePizza }) {
  // const classname = singlePizza.soldOut ? "pizza sold-out" : "pizza";

  const price = singlePizza.soldOut
    ? "Sold Out"
    : (Math.round((singlePizza.price + 0.99) * 100) / 100).toFixed(2);

  return (
    <li className={`pizza ${singlePizza.soldOut ? "sold-out" : ""}`}>
      <img src={singlePizza.photoName} alt={singlePizza.name} />
      <div>
        <h3>{singlePizza.name}</h3>
        <p>{singlePizza.ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  // if (hour <= openHour && hour <= closeHour) alert("Sorry we're closed");
  // else alert(`We're currently open`);

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="Footer">
      {isOpen ? (
        <Order />
      ) : (
        <div className="order" closeHour={closeHour}>
          <p>Sorry, we're closed. We'll open at {openHour}:00</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00 . Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

//React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// console.log("hello");
//react before 18
// React.render(<App />, document.getElementById("root"));
