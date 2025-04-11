
import { BlogContainer } from "./index";
import logo from '../../assets/logo.svg'
import { Summary } from "../../components/Summary";


export function Blog(){
  return (
    <div>
        <img src={logo} style={{ width: "100%"}} />
        <Summary />
      <BlogContainer>
        
      </BlogContainer>
    </div>
  )
}