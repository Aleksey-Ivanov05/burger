import React from 'react';
import Ingredient from "../Ingredient/Ingredient";

interface Props {
  INGREDIENTS: Ingredient[],
  ingredients: IngredientCount[],
  onAdd: (id: number) => void,
  onDelete: (id: number) => void
}

const Ingredients: React.FC<Props> = ({INGREDIENTS, ingredients, onAdd, onDelete}) => {
  return (
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
  );
};

export default Ingredients;