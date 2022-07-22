import React, { useState, useEffect } from "react";
import RecipeTile from "../components/RecipeTile";
import Filter from "../components/Filter";
import styled from "styled-components";
import axios from "axios";

const Dashboard = () => {
  const app_id = process.env.REACT_APP_RECIPE_API_ID;
  const app_key = process.env.REACT_APP_RECIPE_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("indian");
  const [healthLable, setHealthLable] = useState("vegan");
  console.log(app_id);

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPE_API_ID}&app_key=${app_key}&health=${healthLable}&to=48`
      )
      .then((res) => {
        setRecipes(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <div>
      <Main>
        <Filter
          setQuery={setQuery}
          healthLable={healthLable}
          setHealthLable={setHealthLable}
        />
        {/* <h1>{query}</h1> */}
        <div className="recipe">
          {recipes.map((recipe) => {
            console.log(recipe);
            return (
              <RecipeTile recipe={recipe.recipe} key={recipe.recipe.uri} />
            );
          })}
        </div>
      </Main>
    </div>
  );
};
const Main = styled.div`
  width: 90%;
  margin: auto;

  .recipe {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    align-items: center;
    margin: 1rem 1.5rem;
  }
`;

export default Dashboard;
