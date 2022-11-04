import React, {useState} from 'react';
import meatImage from './assets/meatImage.png';
import saladImage from './assets/saladImage.png';
import cheeseImage from './assets/cheeseImage.png';
import baconImage from './assets/baconImage.png';
import Ingredient from "./components/Ingredient/Ingredient";


function App() {
  const INGREDIENTS: Ingredient[] = [
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Bacon', price: 60, image: baconImage},
    {name: 'Meat', price: 80, image: meatImage},
  ];

  const [ingredients, setIngredients] = useState([
    {name: 'Salad', count: 0, id: 1},
    {name: 'Cheese', count: 0, id: 2},
    {name: 'Bacon', count: 0, id: 3},
    {name: 'Meat', count: 0, id: 4},
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

  const ingredientPictures: string[] = [];

  ingredients.forEach(ingredient => {
    for (let i = 0; i < ingredient.count; i++) {
      ingredientPictures.push(ingredient.name);
    }
  })

  const totalPrice = ingredients.reduce((acc, item, i) => {
    return acc + item.count*INGREDIENTS[i].price;
  }, 0);

  return (
    <div className="container">
      <div className="row align-items-center mt-3">
        <div className="col-5 border border-1 border-dark me-3 p-3" >
          {INGREDIENTS.map((ingredient, i) => (
            <Ingredient
              key={ingredients[i].id}
              name={ingredient.name}
              count={ingredients[i].count}
              image={ingredient.image}
              onNameClick={() => onAdd(ingredients[i].id)}
              onDelete={() => onDelete(ingredients[i].id)}
            />
          ))}
        </div>
        <div className="col-5 border border-1 border-dark pt-5">
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            {ingredientPictures.map(name => (
              <div className={name}></div>
            ))}
            <div className="BreadBottom"></div>
          </div>
          <div className="text-center mt-4"><strong>Price: {totalPrice + 30} KGZ</strong></div>
        </div>
      </div>
    </div>
  );
}

export default App;
