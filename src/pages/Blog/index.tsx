
import { BlogContainer } from "./index";
import { Summary } from "../../components/Summary";
import { Header } from "../../components/header";
import { SearchForm } from "../components/SearchForm";
import { ContentLayout } from "../../components/Issues";


export function Blog(){
  return (
    <div>
        <Header />
        <Summary />
      <BlogContainer>
        <SearchForm />
        <ContentLayout />
      </BlogContainer>
    </div>
  )
}