import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Locations from "./pages/Locations/Locations.jsx";
import About from "./pages/About/About.jsx";
import Appetizers from "./pages/Menu/SubMenu/Appetizers.jsx";
import Burgers from "./pages/Menu/SubMenu/Burgers.jsx";
import Chicken from "./pages/Menu/SubMenu/Chicken.jsx";
import Sides from "./pages/Menu/SubMenu/Sides.jsx";
import Salads from "./pages/Menu/SubMenu/Salads.jsx";
import Drinks from "./pages/Menu/SubMenu/Drinks.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path={'/menu'} element={<Menu/>}>
                      <Route path={'appetizers'} element={<Appetizers/>}/>
                      <Route path={'burgers'} element={<Burgers/>}/>
                      <Route path={'chicken'} element={<Chicken/>}/>
                      <Route path={'sides'} element={<Sides/>}/>
                      <Route path={'salads'} element={<Salads/>}/>
                      <Route path={'drinks'} element={<Drinks/>}/>
                  </Route>
                  <Route path={'/locations'} element={<Locations/>}/>
                  <Route path={'/about'} element={<About/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
