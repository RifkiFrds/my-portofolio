import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<HomePage />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
