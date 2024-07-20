// client/src/components/AdminDashboard.js
// import { useState } from 'react';
// import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import logo from "../images/logo.jpg";
// import { LuSearch } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";


import { Link, Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const userName=window.localStorage.getItem("userName");

const AdminDashboard = () => {
  const navigate= useNavigate();
  const adminLogout=()=>{
       window.localStorage.clear();
       navigate("/adminLogin")
  }


  return (
    <>
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
            {/* <div className="Search_Icon" style={{marginRight:"120px"}}><LuSearch /></div> */}
            <div className="thirdPart">
              
                <div className="NavBar_Icons">
                <h6 id="sideMenu" style={{fontSize:"20px"}}> {userName}   </h6> 
                <Link to="Login">
                <li>
                {/* <FaHeart style={{width:"50px"}} /> */}
                </li></Link>
                <Link id="sideMenu" to="rent">
                <li>
                <IoBook style={{width:"50px"}}/>

                    </li></Link>
                    <Link id="sideMenu" to="Login">
                    <li>
                    {/* <FaHouseChimneyUser style={{width:"50px"}}/> */}

                    </li>
                    </Link>
                    {/* <Link to="adminLogin"> */}
                        {/* <li> */}
                        {/* <RiAd/minLine /> */}

                        {/* </li> */}
                    {/* </Link> */}
                    <li>
                     
                      <a id="sideMenu" href="" onClick={adminLogout}> <IoIosLogOut /></a>         
                      
                      </li>
                    </div>
            </div>
        </div>
    {/* dashboard */}
     <div id="dashbaordTop1">
                     {/* <h2>  Welcome {userName}!     
                      <a href="#" onClick={adminLogout}> <IoIosLogOut /></a>         
                      </h2> */}
               </div> 
    <section className="AdminDashBoard">
    <div className="SideMenu">
      <div className="SideMenu__item"><br/>
        <a href="/admin/dashboard">Dashboard</a>
        <br/><br/><br/><br/>
        <h3 className="uploadProduct">
        <Link to="create_user">Selling Items</Link>
        </h3>
        
        <h3 className="uploadProduct">
        <Link to="uploadProduct">Upload Product</Link>
        </h3>
        
        <h3 className="uploadProduct">
        <Link to="updateProduct">Update product</Link>
        </h3>
        <h3 className="uploadProduct">
        <Link to="deleteProduct">Delete Product</Link>
        </h3>
      </div>
    </div>
    <div className="adminDashboard">
      {/* <h1 style={{align:"center"}}>Admin Dashboard</h1> */}
      <Outlet />
      
    </div>



    </section>
    </>
    
  );
};

export default AdminDashboard;





// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [productName, setProductName] = useState('');
// const [productDescription, setProductDescription] = useState('');
// const [productPrice, setProductPrice] = useState('');
// const [productImage, setProductImage] = useState('');

// const createUser = async () => {
//   try {
//     const res = await axios.post('http://localhost:5002/create-user', { name, email, password });
//     console.log(res.data);
//   } catch (err) {
//     console.error(err);
//   }
// };

// const uploadProduct = async () => {
//   try {
//     const res = await axios.post('http://localhost:5002/upload-product', { name: productName, description: productDescription, price: productPrice, image: productImage });
//     console.log(res.data);
//   } catch (err) {
//     console.error(err);
//   }
// };








// <form>
//         <label>Username:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         <br />
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <br />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <br />
//         <button onClick={createUser}>Create User</button>
//       </form>
//       <form>
//         <label>Product Name:</label>
//         <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
//         <br />
//         <label>Product Description:</label>
//         <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
//         <br />
//         <label>Product Price:</label>
//         <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
//         <br />
//         <label>Product Image:</label>
//         <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />
//         <br />
//         <button onClick={uploadProduct}>Upload Product</button>
//       </form>