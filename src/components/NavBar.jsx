import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const NavBar = () => {
  const { currentUser } = useAuth();
  return (
    <Nav>
      <div className="nav-logo">
        <h2>
          <Link to="/">SpoonyVibes</Link>
        </h2>
      </div>
      <div className="nav-menu">
        <Link to="/">Home</Link>
        {/* <Link to="/signup">Sign Up</Link> */}
        <Link to={currentUser ? "/profile" : "/login"}>
          {currentUser ? currentUser.email : "Log In"}
        </Link>
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  background-color: #21605d;
  color: #eaebed;
  min-height: 10vh;
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0.4rem 0.4rem 1rem gray;
  .nav-logo {
    font-size: 1.2rem;
    font-family: "Pacifico", cursive;
    font-weight: lighter;
    flex: 2 1 20rem;
  }
  .nav-menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.1rem;
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: #eaebed;
  }
`;

export default NavBar;
