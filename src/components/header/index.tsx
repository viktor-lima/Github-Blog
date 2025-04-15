import { SummaryContainer } from "./styles"
import logo from '../../assets/logo.svg'

export function Header() { 
  return (
    <div>
      <SummaryContainer>
        <img src={logo}/>
      </SummaryContainer>
    </div>
  )
}