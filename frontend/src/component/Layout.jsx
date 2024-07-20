import logo from "../images/logo.jpg";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { Link,Outlet } from "react-router-dom";
import Footer from "./footer";
// import { LuSearch } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const userName=window.localStorage.getItem("name");






const Layout=()=>{
    const navigate=useNavigate()
    const {user}=useSelector((state)=>({...state}))
    
    const userLogout=()=>{
        localStorage.clear();
        navigate("/home")
   }

   useEffect(()=>{
    userLogout()
    },[])

  

    const cartItem= useSelector((state)=>state.cartItems.cart);
 const itemNumber= cartItem.length;

    return(
        <>
       <section>
        <div className="upperMenu">
            <div className="firstPart">
               <img src={logo} style={{width:"100px", height:"60px",mixBlendMode:"darken", borderRadius:"15px", marginRight:"10px"}}/> <h3>PushtakPrem <br/> <h6> Book Store Website</h6></h3>
            </div>

            <div className="secondPart">
                <form className="searchOption">
                    <select className="Catogory">
                        <option value="all">Catogory</option>
                        <option value="all">Action</option>
                        <option value="all">Suspense</option>
                        <option value="all">Sci-fi</option>
                        <option value="all">Cartoon</option>
                        <option value="all">Knowladge</option>
                    </select>
                <input type="text" placeholder="Search Book Here"   />
                
                </form>
            </div>
                    {/* <div className="Search_Icon"><LuSearch /></div> */}
            <div className="thirdPart">
                <div className="NavBar_Icons">
                <Link id="sideMenu" to="Login">
                <li>
                <FaHeart style={{width:"50px"}} />
                </li></Link>
                <Link id="sideMenu" to="cartItems">
                <li>
                <FiShoppingCart style={{width:"50px"}}/>
                <span className="cartCount"> 
                
                            {itemNumber==0?"":itemNumber}
                        
                </span>
                    </li></Link>

                    

                    {/* <Link to="Login">
                    <li>
                    <FaHouseChimneyUser style={{width:"50px"}}/>

                    </li>
                    </Link> */}
                    {!userName?<Link id="sideMenu" to="adminLogin">
                        <li>
                        <RiAdminLine />

                        </li>
                    </Link>: <a id="sideMenu" style={{fontWeight:"800"}} >{userName}</a> }

                    {!userName?<Link id="sideMenu" to="Login">

                        <li>
                        <FaHouseChimneyUser style={{width:"50px"}}/>
                        
                        </li>
                        
                    </Link>: <a href="" onClick={userLogout} id="sideMenu">  <IoIosLogOut style={{width:"50px"}} /></a> }
                    
                    </div>
            </div>
        </div>
        {/* End Of upper Menu.................... */}
        <div className="MenuBar">
            <div className="menuFirst">
            <ul>
            <li><Link to="home">Home</Link></li>
            <Link to="book"><li>Books</li></Link>
            <Link to="catogory"><li>Catogory</li></Link>
            {!userName?<Link to="rent"><li>Rent</li></Link>:<Link to="orderHistory"><li>OrderHistory</li></Link>}
            <Link to="contact"><li>Contact</li></Link>
            </ul>
            </div>
            <div >
                <Link to="getintouch">
                <button className="button" style={{cursor:"pointer"}}>Get In Touch</button>
                </Link>
                
            </div>
           

        </div>
        {/* end of menubar...................................... */}

        

       </section>
       <div>
       <Outlet/>
       </div>

        <Footer/>
        </>
    )
}
export default Layout