import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Blog } from './pages/Blog/index.tsx'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <Blog />
    </ThemeProvider>
  )
}

export default App
