import React from 'react';
import Ingredient from "../Ingredient/Ingredient";

interface Props {
  INGREDIENTS: Ingredient[],
  ingredients: IngredientCount[],
}

const Burger: React.FC<Props> = ({INGREDIENTS, ingredients}) => {
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
  );
};

export default Burger;