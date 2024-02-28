
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import GridFotos from "../pages/GridFotos/GridFotos";
import OneFoto from "../pages/OneFoto/OneFoto";


export default function Routas () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/GridFotos" element={<GridFotos />} />
          <Route path="/OneFoto" element={<OneFoto />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}