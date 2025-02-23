import Home from "../pages/Home.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

function Layout(){
    return (
        <>
            <Navbar/>
            <div>
                <Home/>
            </div>
        </>
    )
}

export default Layout