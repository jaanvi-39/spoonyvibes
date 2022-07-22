import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Filter = ({ setQuery, healthLable, setHealthLable }) => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const submitHandler = () => {
    setQuery(title);
  };

  return (
    <Main>
      <FilterStyled>
        <div className="input-label">
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
            placeholder="Search..."
          />
        </div>

        <div className="select">
          <label htmlFor="health-label">Specifications :</label>
          <select defaultValue="vegan" id="health-label">
            <option onClick={() => setHealthLable("vegan")}>Vegan</option>
            <option onClick={() => setHealthLable("alcohol-cocktail")}>
              Alcohol-Cocktail
            </option>
            <option onClick={() => setHealthLable("alcohol-Free")}>
              Alcohol-free
            </option>
            <option onClick={() => setHealthLable("celery-free")}>
              Celery-Free
            </option>
            <option onClick={() => setHealthLable("crustcean-free")}>
              Crustcean-Free
            </option>
            <option onClick={() => setHealthLable("dairy-free")}>
              Dairy-Free
            </option>
            <option onClick={() => setHealthLable("egg-free")}>Egg-Free</option>
            <option onClick={() => setHealthLable("fish-free")}>
              Fish-Free
            </option>
            <option onClick={() => setHealthLable("fodmap-free")}>
              FODMAP-Free
            </option>
            <option onClick={() => setHealthLable("gluten-free")}>
              Gluten-Free
            </option>
            <option onClick={() => setHealthLable("immuno-supportive")}>
              Immuno-Supportive
            </option>
            <option onClick={() => setHealthLable("keto-friendly")}>
              Keto-Friendly
            </option>
            <option onClick={() => setHealthLable("low-potassium")}>
              Low Potassium
            </option>
            <option onClick={() => setHealthLable("low-sugar")}>
              Low Sugar
            </option>
            <option onClick={() => setHealthLable("Mediterranean")}>
              Mediterranean{" "}
            </option>
            <option onClick={() => setHealthLable("mollusk-free")}>
              Mollusk-Free
            </option>
            <option onClick={() => setHealthLable("mustard-free")}>
              Mustard-Free
            </option>
            <option onClick={() => setHealthLable("peanut-free")}>
              Peanut-Free
            </option>
            <option onClick={() => setHealthLable("pork-free")}>
              Pork-Free
            </option>
            <option onClick={() => setHealthLable("sesame-free")}>
              Sesame-Free
            </option>
            <option onClick={() => setHealthLable("soy-free")}>Soy-Free</option>
            <option onClick={() => setHealthLable("sugar-conscious")}>
              Sugar-Conscious
            </option>
            <option onClick={() => setHealthLable("tree-Nut-Free")}>
              Tree-Nut-Free
            </option>
            <option onClick={() => setHealthLable("Vegetarian")}>
              Vegetarian
            </option>
            <option onClick={() => setHealthLable("wheat-Free")}>
              Wheat-Free
            </option>
            <option onClick={() => setHealthLable("No-oil-added")}>
              No oil added
            </option>
          </select>
        </div>
      </FilterStyled>
      {/* <button className="btn-submit" onClick={submitHandler} type="submit"> */}
      <FontAwesomeIcon
        icon={faSearch}
        className="search-btn"
        onClick={submitHandler}
      />
      {/* </button> */}
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  margin: 1.5rem 0rem;
  align-items: center;
  justify-content: center;

  .search-btn {
    font-size: 2.4rem;
    margin-bottom: 1rem;

    cursor: pointer;
    padding: 0.6rem;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    background: #21605d;
    color: white;
  }
  .search-btn:hover {
    background: #33918d;

    transform: scale(1.1);
  }
`;
const FilterStyled = styled.div`
  display: flex;
  border: 3px solid #21605d;
  padding: 0rem 2rem;
  margin: 0rem 2rem 1.5rem 1rem;
  border-radius: 5rem;
  /* justify-content: space-evenly;
  align-items: center; */
  width: 60%;
  .input-label {
    align-items: stretch;
    width: 40%;
    margin-right: 1rem;
    border-right: 2px solid #21605d;
    input {
      flex: 1;
      border-left: 1px solid #21605d;
      width: 100%;
      border: none;
      font-size: 1.3rem;
      padding: 0.2rem 0.3rem;
      margin: 0.5rem 0.3rem 0.5rem 0rem;
      color: #21605d;
      font-family: "Playfair Display", serif;
      font-weight: bold;
    }

    input:focus {
      outline: none;
    }
  }

  .select {
    flex: 1;
    /* margin: 0.9rem 2rem 0.4rem 2rem; */
    margin: 0.5rem 0.3rem 0.5rem 0rem;
    padding: 0.2rem 0.3rem;
    font-size: 1.2rem;
    color: #21605d;
    font-weight: bold;

    select {
      margin-left: 0.8rem;

      border: none;
      border-bottom: 2px solid #21605d;
      /* border-radius: 3px; */
      padding: 0.4rem 1rem;
      font-size: 1.1rem;
      color: #21605d;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      /* -webkit-appearance: none;
      -moz-appearance: none; */
      ::-webkit-scrollbar {
        width: 1rem;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #21605d;
        background: #ace8e5;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background: #558a87;
        border-radius: 5px;
      }
    }

    select:focus {
      outline: none;
    }
    select:hover {
      outline: none;
      background: #21605d;
      border-radius: 3px;
      color: white;
    }
  }
`;
export default Filter;
