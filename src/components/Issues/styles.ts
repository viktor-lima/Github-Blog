// ContentLayout.tsx
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 20px;
`;

export const ContentCard = styled.div`
  background-color: #1e293b; // Cor do card
  color: #e2e8f0; // Texto claro
  border-radius: 12px;
  padding: 24px;
  width: 500px;
  max-height: 20rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    color: #cbd5e1;
  }

  span {
    font-size: 12px;
    color: #94a3b8;
    float: right;
  }
`;