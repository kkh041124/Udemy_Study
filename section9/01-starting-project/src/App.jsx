import Edit from "./page/Edit";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
