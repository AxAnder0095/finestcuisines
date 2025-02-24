// import Home from "../pages/Home/Home.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import {Outlet} from "react-router-dom";

function Layout(){
    return (
        <>
            <Navbar/>

            <Outlet/>

            <Footer/>
        </>
    )
}

export default Layout