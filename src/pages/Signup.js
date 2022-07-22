import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { StyledCommon, Account, Alert } from "../styles/styles";
import { Link, useNavigate } from "react-router-dom";

const AlreadyAccount = styled(Account)``;

const SignUpStyled = styled(StyledCommon)``;
const AlertSignUp = styled(Alert)``;

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="signup">
      <SignUpStyled>
        <h2>Sign Up</h2>

        {error && <AlertSignUp>{error}</AlertSignUp>}
        <form>
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            id="password"
            ref={passwordRef}
          />
          <label htmlFor="confirmPassword">Confirm Password </label>
          <input
            type="password"
            placeholder="Re-enter your Password"
            id="confirmPassword"
            ref={confirmPasswordRef}
          />
        </form>
        <button
          disabled={loading}
          type="submit"
          className="btn-sign-up"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </SignUpStyled>
      <AlreadyAccount>
        Already have an account ?{" "}
        <Link to="/login">
          <span>Log In</span>
        </Link>
      </AlreadyAccount>
    </div>
  );
};

export default Signup;
