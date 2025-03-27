import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Index from "./index"
import Detalle from "./index/detalle"
import styled from '@emotion/styled';

const Header = styled.div`
  width: 100%;
  background: #ef5350;;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const Link = styled(NavLink)`
  background: none;
  border: none;
  border-radius: 100vmax;
  outline: none;
  color: white;
  padding: 0.5em;
  text-decoration: none;
  &:hover {
    background: #B22222;
  }
`;

function App() {

  return(
    <BrowserRouter>
      <Header>
        <Link to="/">Home</Link>
      </Header>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/pokemon/:id' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
