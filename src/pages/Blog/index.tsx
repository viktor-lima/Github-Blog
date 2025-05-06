
import { BlogContainer } from "./styles";
import { Summary } from "../../components/Summary";
import { Header } from "../../components/header";
import { SearchForm } from "../components/SearchForm";
import { ContentLayout } from "../../components/Issues";
import { IssueProvider } from "../../components/context/IssueContext";

export function Blog(){

  return (
    <div>
        <Header />
        <Summary />
      <BlogContainer>
        <IssueProvider>
          <SearchForm />
            <ContentLayout />
        </IssueProvider>
      </BlogContainer>
    </div>
  )
}