import React, {useState} from 'react';
import meatImage from './assets/meatImage.png';
import saladImage from './assets/saladImage.png';
import cheeseImage from './assets/cheeseImage.png';
import baconImage from './assets/baconImage.png';
import Ingredient from "./components/Ingredient/Ingredient";


function App() {
  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},
  ];

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id: 1},
    {name: 'Cheese', count: 0, id: 2},
    {name: 'Salad', count: 0, id: 3},
    {name: 'Bacon', count: 0, id: 4},
  ]);

  return (
    <div className="container">
      <div className="row align-items-center mt-3">
        <div className="col-5 border border-1 border-dark me-3 p-3 h-100" >
          {INGREDIENTS.map((ingredient, i) => (
            <Ingredient name={ingredient.name} count={ingredients[i].count} image={ingredient.image}/>
          ))}
        </div>
        <div className="col-5 border border-1 border-dark">Something</div>
      </div>
    </div>
  );
}

export default App;
