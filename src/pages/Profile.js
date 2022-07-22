import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { StyledCommon, Alert } from "../styles/styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProfileStyle = styled(StyledCommon)``;
const AlertLogOut = styled(Alert)``;
const Profile = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();
  async function handleLogOut(e) {
    e.preventDefault();
    // setError("");

    try {
      setError("");
      await logout();
      history("/");
    } catch {
      setError("Failed to Log Out");
    }
  }
  return (
    <ProfileStyle>
      <h2>User Profile</h2>
      {error && <AlertLogOut>{error}</AlertLogOut>}
      <form>
        <label htmlFor="email">Email</label>
        <input
          disabled
          type="email"
          placeholder="Enter your email"
          id="email"
          value={currentUser.email}
        />
      </form>

      <button onClick={handleLogOut}>Log Out</button>
    </ProfileStyle>
  );
};

export default Profile;
