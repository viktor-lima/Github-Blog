import { useContext } from "react";
import { Container, ContentCard } from "./styles";
import { IssueContext } from "../context/IssueContext";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function ContentLayout() {

  const { issues } = useContext(IssueContext);


  return (
    <Container>
      {/* Mapeando as issues e gerando um ContentCard para cada uma */}
      {issues.map(issue => (
        <ContentCard key={issue.id}>
          <span>{formatDistanceToNow(issue.created_at, {
            addSuffix: true,
            locale: ptBR
          })}</span> {/* Formatação da data */}
          <h3>{issue.title}</h3>
          <p>{issue.body.slice(0, 220) + "..."}</p>
        </ContentCard>
      ))}
    </Container>
  );
}