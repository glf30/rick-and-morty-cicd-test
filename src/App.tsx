import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersPage from "./components/CharactersPage";
import CharacterPage from "./components/CharacterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          <Route path="/:id" element={<CharacterPage/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
