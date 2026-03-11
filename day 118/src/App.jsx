const recipeData = [
  {
    title: "Pancakes",
    image: "https://via.placeholder.com/150",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar"],
    instructions: "Mix all ingredients and cook on a pan."
  },
  {
    title: "Salad",
    image: "https://via.placeholder.com/150",
    ingredients: ["Tomato", "Cucumber", "Onion", "Olive oil"],
    instructions: "Chop vegetables and mix them together."
  },
  {
    title: "Sandwich",
    image: "https://via.placeholder.com/150",
    ingredients: ["Bread", "Cheese", "Ham", "Lettuce"],
    instructions: "Put ingredients between bread slices."
  }
];

function IngredientsList(props) {
  return (
    <ul>
      {props.ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Instructions(props) {
  return (
    <p>{props.instructions}</p>
  );
}

import RecipeHeader from "./RecipeHeader";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

function RecipeCard(props) {
  const recipe = props.recipeObject;

  return (
    <div>
      <RecipeHeader title={recipe.title} image={recipe.image} />
      <IngredientsList ingredients={recipe.ingredients} />
      <Instructions instructions={recipe.instructions} />
    </div>
  );
}

import recipeData from "./recipeData";
import RecipeCard from "./RecipeCard";

function App() {
  return (
    <div>
      {recipeData.map((recipe, index) => (
        <RecipeCard key={index} recipeObject={recipe} />
      ))}
    </div>
  );
}

export default recipeData;



