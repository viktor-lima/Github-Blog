
import { BlogContainer } from "./index";
import { Summary } from "../../components/Summary";
import { Header } from "../../components/header";


export function Blog(){
  return (
    <div>
      {/* <div style={{ width: '100vw', height: '20rem', overflow: 'hidden' }}>
        <img src={logo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div> */}
        <Header />
        <Summary />
      <BlogContainer>
        
      </BlogContainer>
    </div>
  )
}