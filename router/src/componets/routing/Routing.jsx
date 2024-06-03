import { Routes,Route } from "react-router-dom";
import Home from "../home_component/Home.jsx";
import List from "../lists/List.jsx";
import Contact from "../Contact/Contact.jsx";
import PaginationClassComp from "../paginationclass/PaginationClassComp.jsx";
import RLists from "../redux-lists/RLists.jsx";
import AddRlist from "../redux-lists/AddRlist.jsx";




const Routing=()=>{
    return (
        <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/fList" element={<RLists/>}/>
        <Route path="/afList" element={<AddRlist/>}/>
        <Route path="/pageclass" element={<PaginationClassComp/>}/>
      
        
       
       </Routes>
        </>
    )
}
export default Routing;