import Login from "./view/login";
import Registro from "./view/Registro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
