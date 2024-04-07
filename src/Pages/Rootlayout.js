import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";

function Rootlayout(){
    return <>
    <MainNavbar/>
    <Outlet/>
    </> 
    
}

export default Rootlayout;
