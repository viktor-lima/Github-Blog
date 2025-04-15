
import { BlogContainer } from "./index";
import { Summary } from "../../components/Summary";
import { Header } from "../../components/header";
import { SearchForm } from "../components/SearchForm";


export function Blog(){
  return (
    <div>
        <Header />
        <Summary />
      <BlogContainer>
        <SearchForm />
      </BlogContainer>
    </div>
  )
}