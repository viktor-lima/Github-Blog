import { Routes, Route } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { Details } from './pages/details';

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Blog />} /> {/* Corrigindo o caminho */}
        <Route path="details/:id" element={<Details />} /> {/* Corrigindo o caminho */}
      </Route>
    </Routes>
  );
}
