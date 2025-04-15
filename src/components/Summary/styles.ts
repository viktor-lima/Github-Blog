import styled from "styled-components";


export const SummaryContainer = styled.div`
  /* width: 100%; */
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 12rem;

  display: flex;
  margin-top: -8rem;
`

export const SummaryCard = styled.div`
  background: ${props => props.theme["blue-400"]};
  width: 100%;
  border-radius: 6px;
  padding: 2rem;
`