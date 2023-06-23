import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CatByCategory from "./components/CatByCategory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/id/:category" element={<CatByCategory />} />
      </Route>
    </Routes>
  );
}

export default App;
