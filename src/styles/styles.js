import styled from "styled-components";
export const StyledCommon = styled.div`
  margin: 3rem auto 2rem auto;
  display: flex;
  flex-direction: column;
  border: 2px solid #21605d;
  border-radius: 5px;
  max-width: 35rem;
  box-shadow: 2px 2px 20px #818181;
  padding: 2rem 3rem;
  color: #21605d;
  h2 {
    font-size: 1.9rem;
    padding-bottom: 1rem;
    text-align: center;
    font-weight: bolder;
  }
  form {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    label {
      font-weight: bold;
      padding: 1rem 0rem 0.5rem 0rem;
    }
    input {
      padding: 0.7rem 0.5rem;
      font-size: 1.2rem;
      border: 1px solid #21605d;
      border-radius: 4px;
      color: #21605d;
      &:hover,
      &:focus {
        outline: 2px solid #21605d;
      }
    }
  }
  button {
    margin: 0.9rem 0rem;
    padding: 0.8rem 0rem;
    font-size: 1.4rem;
    background: #21605d;
    border: 2px solid #21605d;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      border: 2px solid #21605d;
      background: none;
      color: #21605d;
    }
  }
`;

export const Account = styled.div`
  margin: auto;
  width: 35rem;
  text-align: center;
  font-size: 1.2rem;
  /* padding: 1rem 0rem; */
  span {
    text-decoration: none;
    color: #21605d;
    font-weight: bolder;
    cursor: pointer;
  }
`;
export const Alert = styled.div`
  border: 1px solid red;
  color: red;
  background: rgba(232, 139, 139, 0.2);
  padding: 0.7rem;
  font-size: 1rem;
  font-weight: bolder;
  border-radius: 4px;
`;
