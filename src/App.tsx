import React, {useState} from 'react';
import meatImage from './assets/meatImage.png';
import saladImage from './assets/saladImage.png';
import cheeseImage from './assets/cheeseImage.png';
import baconImage from './assets/baconImage.png';
import Ingredient from "./components/Ingredient/Ingredient";
import Ingredients from "./components/Ingredients/Ingredients";
import Burger from "./components/Burger/Burger";


function App() {
  const INGREDIENTS: Ingredient[] = [
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Bacon', price: 60, image: baconImage},
    {name: 'Meat', price: 80, image: meatImage},
  ];

  const [ingredients, setIngredients] = useState([
    {name: 'Salad', count: 1, id: 1},
    {name: 'Cheese', count: 1, id: 2},
    {name: 'Bacon', count: 0, id: 3},
    {name: 'Meat', count: 1, id: 4},
  ]);

  const onAdd = (id: number) => {
    setIngredients(prev => prev.map(ingredient => {
      return ingredient.id === id ? {
        ...ingredient,
        count: ingredient.count + 1,
      } : ingredient;
    }))
  }

  const onDelete = (id: number) => {
    const ingredientsCopy = ingredients.map(ingredient => {
      if (ingredient.count > 0) {
        if (ingredient.id === id) {
          return {
            ...ingredient,
            count: ingredient.count - 1
          };
        }
      }

      return ingredient;
    });

    setIngredients(ingredientsCopy);
  };

  return (
    <div className="container">
      <div className="row align-items-center mt-3">
        <Ingredients INGREDIENTS={INGREDIENTS} ingredients={ingredients} onAdd={onAdd} onDelete={onDelete}/>
        <Burger INGREDIENTS={INGREDIENTS} ingredients={ingredients}/>
      </div>
    </div>
  );
}

export default App;
