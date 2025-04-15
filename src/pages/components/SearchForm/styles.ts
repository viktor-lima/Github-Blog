import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap:1rem;

  #published {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.2rem;
  }

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["blue-700"]};
    color: ${props => props.theme["blue-300"]};
    padding: 1rem;
    width: 100%;
    &::placeholder {
      color: ${props => props.theme["blue-300"]};
    }
    margin-top: 0.5rem;

  }
`