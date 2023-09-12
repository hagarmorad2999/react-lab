import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";



export default function Layout(){
return<>
<Navbar/>
<div className="container-fluid">
<Outlet></Outlet>

</div>

</>


}
