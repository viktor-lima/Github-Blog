import { useContext } from "react";
import { Container, ContentCard } from "./styles";
import { IssueContext } from "../context/IssueContext";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NavLink } from "react-router-dom";

export function ContentLayout() {

  const { issues } = useContext(IssueContext);


  return (
    <Container>
      {issues.map(issue => (
        <NavLink to={`/details/${issue.id}`} title="Details" id="active" key={issue.id}>
          <ContentCard key={issue.id}>
            <span>{formatDistanceToNow(issue.created_at, {
              addSuffix: true,
              locale: ptBR
            })}</span>
            <h3>{issue.title}</h3>
            <p>{issue.body.slice(0, 220) + "..."}</p>
          </ContentCard>
        </NavLink>
      ))}
    </Container>
  );
}

