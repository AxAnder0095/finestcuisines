import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Locations from "./pages/Locations/Locations.jsx";
import About from "./pages/About/About.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path={'/menu'} element={<Menu/>}/>
                  <Route path={'/locations'} element={<Locations/>}/>
                  <Route path={'/about'} element={<About/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
