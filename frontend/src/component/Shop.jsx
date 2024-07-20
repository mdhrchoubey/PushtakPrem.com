import { addtoCart } from "../Slice/BookSlice";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Shop=()=>{

    const [books, setBooks] = useState([]);
    // const dispatch=useDispatch();
    const myitems=useSelector((state)=>{state.cartItems.cart});
    console.log(myitems);
    const loadProduct=()=>{
        let url="http://localhost:5002/books/totalproduct";
        axios.get(url).then((res)=>{
          setBooks(res.data.product);
        });
    }
  useEffect(()=>{
    loadProduct();
  }, [])

  const prodcutData= books.map((key)=>{
    return(
     <>
         <div id="pro1">
             <img src={key.image} style={{width:"250px", height:"300px"}} />
             <br/>
             {key.name}
             <br/>
             Brand: {key.auther}
             <br/>
             Price :  {key.price} /-
             <br/>
             <button id="button" style={{
              width:"100px",
              height:"25px"
             }}  
             > Rent </button>
         </div>
     
     </>
    )
})
    

    return(
        <>
          <div id="featureProduct">
          <h1 align="center" > The Shop Page</h1> 
            <div id="fetaureProList">
                 {prodcutData}
            </div>
      </div>
        
        </>
    )
}
export default Shop;



// onClick={
//   ()=>{dispatch(addtoCart({id:key._id, name:key.name, price:key.price, image:key.image, auther:key.auther, qnty:1}))}}