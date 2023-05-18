import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Backoffice from "./components/back-office/Backoffice";
import Layout from "./components/front-office/layout/Layout";
import Puppies from "./components/front-office/Puppies";
import Page404 from "./components/front-office/layout/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Backoffice />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Puppies />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
