import ADlogin from "./ADlogin";
import Admin from "./Admin";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./stye.css"
import Nav from "./Nav";
import RSRHome from "./RSRHome";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Stocks from "./admin/Stocks";
import Customers from "./admin/Customers";
import Suppliers from "./admin/Suppliers";
import History from "./admin/History";
import Add_Stock from "./admin/Add_Stock";
import Add_Customer from "./admin/Add_Customer";
import Add_Supplier from "./admin/Add_Supplier";



function App() {
  
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/"element={<RSRHome />}></Route>
        <Route path="/adlogin" element={<ADlogin/>}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/stock" element={<Stocks />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/suppliers" element={<Suppliers />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/Add_Stock" element={<Add_Stock />}></Route>
        <Route path="/add_customer" element={<Add_Customer />}></Route>
        <Route path="/add_supplier" element={<Add_Supplier />}></Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
