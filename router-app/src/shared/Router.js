import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Works from "../pages/Works";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about/" element={<About></About>}></Route>
        <Route path="contact/" element={<Contact></Contact>}></Route>
        <Route path="works/" element={<Works></Works>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
