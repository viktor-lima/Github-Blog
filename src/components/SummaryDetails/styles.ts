import styled from "styled-components";


export const SummaryContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 7rem;

  display: flex;
  flex-direction: column;
  margin-top: -4rem;
`

export const SummaryCard = styled.div`
  background: ${props => props.theme["blue-400"]};
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  #back {

    #arrowBack {
      font-size: 1rem;
    }
    text-decoration: none;
    div {

      p {
        font-size: 1rem;
      }

      display: flex;
      align-items: center;
      color: #6b6aa9;
      
    }

    :hover{
      color: ${props => props.theme["gray-100"]};
    }

  }
`

export const SummaryContent = styled.div`
  display: flex;
  justify-content: space-between;

  & img {
    width: 10rem;
    height: 10rem;
    border-radius: 10px;
  }

  p {
    margin-top: 1.5rem;
    line-height: 2rem;
  }

  #icons {
    margin-top: .5rem;
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


export const ContentBody = styled.div.attrs({
  className: 'markdown-body'
})`
  padding: 1rem;
  background: transparent;
  padding-top: 24px;
  margin-top: 2rem;
  width: 900px;
  color: ${props => props.theme.white};
`;