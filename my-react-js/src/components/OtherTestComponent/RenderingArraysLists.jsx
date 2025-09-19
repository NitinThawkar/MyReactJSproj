// we can directly export from here
import Fruit from "./Fruit";
export default function RenderingArraysLists() {
  const fruits = ["apple", "banana", "mango", "orange"];

  const friitsList = fruits.map((fruit) => <h3 key={fruit}>{fruit}</h3>);

  const fruitCart = [
    { name: "banana", price: 20, quantity: 2, emoji: "🍌🍌🍌" },
    { name: "Apple", price: 30, quantity: 8, emoji: "🍎🍎🍎" },
    { name: "mango", price: 50, quantity: 5, emoji: "🥭🥭🥭" },
    { name: "orangr", price: 20, quantity: 5, emoji: "🍊🍊🍊" },
    { name: "pineapple", price: 40, quantity: 6, emoji: "🍍🍍🍍" },
  ];

  return (
    <div>
      ---------------------------------------------<br></br>
      <h2>Rendering Arrays and Lists</h2>
      <ul>
        {[1, 2, 3, 4, 5].map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      ---------------------------------------------<br></br>
      #redaring fruits array
      <div>
        {fruits.map((fruit) => (
          <h3 key={fruit}>{fruit}</h3>
        ))}
      </div>
      ---------------------------------------------<br></br>
      #redaring fruits array using variable
      <div>{friitsList}</div>
      ---------------------------------------------<br></br>
      #redaring fruitCart object array
      <div>
        <ul>
          {fruitCart.map((frt) => (
            <li key={frt.name}>
              {" "}
              $: {frt.price} {"------"}pic {frt.emoji}
            </li>
          ))}
        </ul>
      </div>
      ---------------------------------------------<br></br>
      #redaring fruitCart from child component
      <div>
        {fruitCart.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} pic={fruit.emoji}></Fruit>
        ))}
      </div>
    </div>
  );
}
