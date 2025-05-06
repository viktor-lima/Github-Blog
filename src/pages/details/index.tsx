import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { Summary } from "../../components/Summary";


export function Details(){
  const { id } = useParams();
  return (
    <div>
        <Header />
        <div>
          <h1>Detalhes da Issue {id}</h1>
          {/* Aqui você pode buscar os dados da issue com base no id */}
        </div>
        <Summary />
      {/* <BlogContainer>
        <IssueProvider>
          <SearchForm />
          <ContentLayout />
        </IssueProvider>
      </BlogContainer> */}
    </div>
  )
}