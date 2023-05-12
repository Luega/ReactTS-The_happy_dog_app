import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Backoffice from "./components/back-office/Backoffice";
import Layout from "./components/front-office/layout/Layout";
import Home from "./components/front-office/Home";
import Puppies from "./components/front-office/Puppies";
import About from "./components/front-office/About";
import Contact from "./components/front-office/Contact";
import Page404 from "./components/front-office/layout/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Backoffice />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
