import { useSelector, useDispatch } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import  {useNavigate} from "react-router-dom";
import {increaseQuantity, decreaseQuantity, removeItem} from "../Slice/BookSlice";
const CartPage = () => {
    const cartData=useSelector((state)=>state.cartItems.cart);
    const dispatch= useDispatch();
   
    const navigate=useNavigate();

   console.log("Welcome: ")
   console.log(cartData);
   const qtyIncrease=(id)=>{
    dispatch(increaseQuantity(id))
   }
   const qtyDecrease=(id)=>{    
    dispatch(decreaseQuantity(id))
   }
   const itemRemove=(id)=>{
      dispatch(removeItem(id))
   }

   const checkOut=()=>{
    navigate("/checkout");
   }




   let totalAmount=0;
    const myData=cartData.map((key)=>{
      totalAmount+=key.price*key.qnty;
         return(
            <>
             <tr>
                    <td> <img src={key.image} width="70" height="50" /> </td>
                    <td> {key.name} </td>
                    <td> {key.auther} </td>
                    {/* <td> {key.desc} </td> */}
                    <td>{key.category} </td>
                    <td style={{color:"#04AA6D", fontSize:"20px"}}>
                   
                   
                   <a href='#'>
                    <FaMinus  onClick={()=>{qtyDecrease(key.id)}}  />
                    </a>      
                      <span style={{paddingLeft:"10px", paddingRight:"10px", fontWeight:"bold", color:"black"}}>
                      {key.qnty}
                      </span>
                      <a href='#'>
                        <FaPlus  onClick={()=>{qtyIncrease(key.id)}} />
                       </a> 
                        </td>
                    <td> {key.price} </td>
                    <td> {key.price*key.qnty}</td>
                    <td>
                    
                       <button onClick={()=>{itemRemove(key.id)}}>Remove</button>
                       
                     </td>
               </tr>     
            
            </>
         )
    })


  return (
      <>
             <h1 align="center"> My Cart Items</h1>  

               <table align='center' width="78%" id='carttable' style={{display:"block", justifyContent:"space-evenly", marginLeft:"150px", fontWeight:"bold"
               }}> 
                <tr >
                  
                    <th> Image</th>
                    <td align='center' width="15%" > Name </td>
                    <td align='center' width="14%"> Auther </td>
                    <td align='center' width="20%"> category </td>
                    <td align='center' width="20%"> Quantity</td>
                    <td align='center' width="25%"> Rate </td>
                    <td align='center' width="25%"> Total Price </td>
                    {/* <th>  </th> */}
                    
                </tr>
                {myData}
                <tr style={{fontSize:"25px"}}>
                  {/* <th></th> */}
                  {/* <th></th> */}
                  <th></th>
                  <th></th>
                  <th></th>
                  <th colSpan="3" align='right' style={{marginLeft:"100px", border:"1px solid"}}> Total Net Amount : </th>
                  <th style={{marginLeft:"100px", border:"1px solid"}}> {totalAmount} </th>
                </tr>
                <tr>
                   <td ></td>
                   <td ></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td> 
                    <br/>

                     <button style={{border:"1px solid", width:"200px"}} onClick={checkOut} id='Checkout'>  Check Out </button>

                   </td>
                </tr>
               </table>
      </>
  )
}
export default CartPage;