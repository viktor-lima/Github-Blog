import styled from "styled-components";


export const SummaryContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 14rem;

  display: flex;
  margin-top: -6rem;
`

export const SummaryCard = styled.div`
  background: ${props => props.theme["blue-400"]};
  width: 100%;
  border-radius: 10px;
  padding: 2rem;
`

export const SummaryContent = styled.div`
  display: flex;
  gap: 2rem;

  & img {
    width: 10rem;
    height: 10rem;
    border-radius: 10px;
  }

  h1 {
    margin: 0; 
  }

  p {
    margin-top: 1.5rem;
    line-height: 2rem;
  }

  #icons {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;

    a {
      display: flex;
      flex-direction: row;
      align-items: center; /* centraliza verticalmente o ícone e o nome */
      gap: 0.5rem;
      font-size: 14px;
      text-decoration: none;
      color: #6b6aa9;
    }
  }
  a {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      color: #6b6aa9;
  }
`;
