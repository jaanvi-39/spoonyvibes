import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { StyledCommon, Account, Alert } from "../styles/styles";
import { Link, useNavigate } from "react-router-dom";

const LogInStyled = styled(StyledCommon)``;
const AlreadyAccount = styled(Account)``;
const AlertLogin = styled(Alert)``;
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <div className="login">
      <LogInStyled>
        <h2>Log In</h2>

        {error && <AlertLogin>{error}</AlertLogin>}
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
        </form>
        <button
          disabled={loading}
          type="submit"
          className="btn-sign-up"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </LogInStyled>
      <AlreadyAccount>
        Need an account ?{" "}
        <Link to="/signup">
          <span>Sign Up</span>
        </Link>
      </AlreadyAccount>
    </div>
  );
};

export default Login;
