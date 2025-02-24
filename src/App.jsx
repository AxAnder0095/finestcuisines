import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Layout/>}>
                  <Route index element={<Home/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
