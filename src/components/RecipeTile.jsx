import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faKitchenSet,
  faUtensils,
  faBowlFood,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AuthContext";

const RecipeTile = ({ recipe }) => {
  const { currentUser } = useAuth();
  const handleClick = () => {
    if (currentUser) {
      window.open(recipe.url);
    } else {
      alert("Log in to continue!");
    }
  };
  return (
    <Card onClick={handleClick}>
      <h3>{recipe.label}</h3>

      <img src={recipe.image} alt={recipe.label} />
      <RecipeDetails>
        <div className="calories r-style">
          <div className="title">
            <FontAwesomeIcon icon={faDumbbell} className="icon" />
            <p>Calories </p>
          </div>
          <p>{Math.round(recipe.calories * 100) / 100}</p>
        </div>
        <div className="cuisine r-style">
          <div className="title">
            <FontAwesomeIcon icon={faKitchenSet} className="icon" />
            <p>Cuisine </p>
          </div>
          <p>{recipe.cuisineType}</p>
        </div>
        <div className="dish r-style">
          <div className="title">
            <FontAwesomeIcon icon={faUtensils} className="icon" />
            <p>Dish Type </p>
          </div>
          <p>{recipe.dishType}</p>
        </div>
        <div className="meal r-style">
          <div className="title">
            <FontAwesomeIcon icon={faBowlFood} className="icon" />
            <p>Meal Type </p>
          </div>
          <p>{recipe.mealType}</p>
        </div>
        <div className="ing r-style">
          <div className="title">
            <FontAwesomeIcon icon={faBowlFood} className="icon" />
            <p>Ingredients </p>
          </div>
          <p>{recipe.ingredientLines.length}</p>
        </div>
      </RecipeDetails>
    </Card>
  );
};
const Card = styled.div`
  cursor: pointer;
  border: 5px solid #21605d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 25%;
  margin: 1rem 1.4rem;
  border-radius: 1rem;
  flex: 1;
  box-shadow: 0px 5px 20px gray;
  height: 27.5rem;
  overflow-y: hidden;
  position: relative;

  h3 {
    text-align: center;
    margin: 1rem 0.5rem;
    font-size: 1.5rem;
    flex: 1;
    color: #194846;
  }

  img {
    flex: 1;
    width: 100%;
    object-fit: cover;
  }
`;
const RecipeDetails = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
  padding: 4.5rem 0.8rem 3rem 0.8rem;
  justify-content: center;
  opacity: 0;
  position: absolute;
  top: 3rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    opacity: 1;
  }
  .r-style {
    margin: 0.9rem 0rem;
    font-size: 1.4rem;
    color: #21605d;
    p {
      font-size: 1.1rem;
      text-align: center;
      font-weight: bold;
      padding: 0.3rem 0rem 0rem 0rem;
      text-transform: capitalize;
    }
  }

  .title {
    p {
      display: inline;
      font-size: 1.4rem;
      font-weight: bolder;
    }
    .icon {
      color: #21605d;
      font-size: 1.8rem;
      margin: 0rem 1rem 0rem 0.3rem;
    }
  }
`;
export default RecipeTile;
