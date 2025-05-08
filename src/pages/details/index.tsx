import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { SummaryDetails } from "../../components/SummaryDetails";


export function Details(){
  const { number } = useParams();

  return (
    <div>
        <Header />
        <SummaryDetails number={number || ''} />
      {/* <BlogContainer>
        <IssueProvider>
          <SearchForm />
          <ContentLayout />
        </IssueProvider>
      </BlogContainer> */}
    </div>
  )
}