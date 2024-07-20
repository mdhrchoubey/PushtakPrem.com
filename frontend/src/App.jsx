import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./component/Home"
import Books from "./component/Books"
import Contact from "./component/Contact"
import Catogory from "./component/Catogory"
import AdminDashboard from "./Login/AdminDash"
import Admin from "./Login/AdminLogin"
import UploadBook from "./component/UploadBook"
import UserLogin from "./component/UserLogin"
import Shop from "./component/Shop"
import CartPage from "./component/CartItems"
import CheckOut from "./component/Cheackout"
import PurchaseHistory from "./Login/PurchaseHistory"
import Touch from "./component/Touch"
import RentBook from "./component/RentBook"
import Login from "./component/UserLogin"
import Ragister from "./userLogin/Register"
import OrderHistory from "./component/Order"





const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="home" element={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path="book" element={<Books/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="rent" element={<RentBook/>}/>
        <Route path="orderHistory" element={<OrderHistory/>}/>
        <Route path="cartitems" element={<CartPage/>}/>
        <Route path="catogory" element={<Catogory/>}/>
        <Route path="Login" element={<UserLogin/>}/>
        {/* <Route path="register" element={<Ragister/>}/> */}
        <Route path="adminLogin" element={<Admin/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
        <Route path="getintouch" element={<Touch/>}/>
      </Route>
      <Route path="adminDash" element={<AdminDashboard/>}>
        <Route path="uploadProduct" element={<UploadBook/>}/>
        <Route path="create_user" element={<PurchaseHistory/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App