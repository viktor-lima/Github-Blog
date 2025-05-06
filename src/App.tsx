import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Router'; 
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <BrowserRouter>
        <Router /> {/* Usando o Router aqui */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
