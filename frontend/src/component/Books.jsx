import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../Slice/BookSlice";
// import Banner from "./Banner";
// import AllBookDisplay from "./Allbook";

const Books=()=>{

    const dispatch=useDispatch();
    const myitems=useSelector((state)=>{state.cartItems.cart});
    console.log(myitems);


    const [mydata, setMydata]=useState([]);



    const displayAll=()=>{
            let url="http://localhost:5002/books/allBooksDisplay";
            axios.get(url).then((res)=>{
                console.log(res.data.product);
                setMydata(res.data.product);
            });
        }
 


    useEffect(()=>{
       
        displayAll();

    }, []);

// Rent book function

const [bookId, setBookId] = useState('');
const [message, setMessage] = useState('');
const [content, setContent] = useState('');
const [page, setPage] = useState(0);

const rentBook = async () => {
    try {
        const response = await axios.post(`http://localhost:5002/rents/rent/${bookId}`);
        setMessage(response.data.message);
        setContent('');
        setPage(0);
        console.log(response.data.message)
    } catch (error) {
        setMessage(error.response.data.message);
    }
};

    // const rentBook = async (bookId) => {
    //     try {
    //       const response = await axios.post(`http://localhost:5002/books/rent/${bookId}`);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
      
    //   const returnBook = async (bookId) => {
    //     try {
    //       const response = await axios.post(`http://localhost:5002/books/return/${bookId}`);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };



    const ans= mydata.map((key)=>{
        return(
         <>
             <div id="pro1">
                 <img src={key.image} style={{width:"250px", height:"300px"}} />
                 <br/>
                 {key.name}
                 <br/>
                 Brand: {key.brand}
                 <br/>
                 Price :  {key.price} /-
                 <br/><button id="buttonCart" onClick={rentBook}>Rent</button>
                 <button id="buttonCart" onClick={
            ()=>{dispatch(addtoCart({id:key._id, name:key.name, price:key.price, image:key.image, auther:key.auther, qnty:1}))}}> Add to Cart </button>
             </div>
         </>
        )
    })



    return(
        <>
         
      <div id="featureProduct">
            <h1> All Books </h1>
            <div id="fetaureProList">
                {ans} 
            </div>
      </div> 

        
      
           
        </>
    )
}
export default Books;



// const [featureProduct, setFeatureProduct]= useState([]);
// const [topsellingProduct, setTopSellingProduct]= useState([]);
// const [trendingProduct, settrendingProduct]= useState([]);

// const loadFetureProduct=()=>{
//     let url="http://localhost:5002/books/fetureProductDisplay";
//     axios.get(url).then((res)=>{
//         console.log(res.data.product);
//         setFeatureProduct(res.data.product);
//     });
// }

// const loadTopSellingProduct=()=>{
//     let url="http://localhost:5002/books/topsellingProductDisplay";
//     axios.get(url).then((res)=>{
//         console.log(res.data.product);
//         setTopSellingProduct(res.data.product);
//     });
// }

// const loadtrendingProduct=()=>{
//     let url="http://localhost:5002/books/trendingProductDisplay";
//     axios.get(url).then((res)=>{
//         console.log(res.data.product);
//         settrendingProduct(res.data.product);
//     });
// }


// const fetaureData= featureProduct.map((key)=>{
//     return(
//      <>
//          <div id="pro1">
//              <img src={key.image} style={{width:"250px", height:"300px"}} />
//              <br/>
//              {key.name}
//              <br/>
//              {key.auther}
//              <br/>
//              Price :  {key.price} /-
//              <br/>
//              <button id="buttonCart" onClick={
//      ()=>{dispatch(addtoCart({id:key._id, name:key.name, price:key.price, image:key.image, auther:key.auther, qnty:1}))}}> Add to Cart </button>
//          </div>


     
//      </>
//     )
// })



// const topSellingData= topsellingProduct.map((key)=>{
//  return(
//   <>
//       <div id="pro1">
//           <img src={key.image} style={{width:"250px", height:"300px"}} />
//           <br/>
//           {key.name}
//           <br/>
//           Brand: {key.brand}
//           <br/>
//           Price :  {key.price} /-
//           <br/>
//           <button id="buttonCart" onClick={
//      ()=>{dispatch(addtoCart({id:key._id, name:key.name, price:key.price, image:key.image, auther:key.auther, qnty:1}))}}> Add to Cart </button>
//       </div>


  
//   </>
//  )
// })


// const trendingData= trendingProduct.map((key)=>{
//  return(
//   <>
//       <div id="pro1">
//           <img src={key.image} style={{width:"250px", height:"300px"}} />
//           <br/>
//           {key.name}
//           <br/>
//           Brand: {key.brand}
//           <br/>
//           Price :  {key.price} /-
//           <br/>
//           <button id="buttonCart" onClick={
//      ()=>{dispatch(addtoCart({id:key._id, name:key.name, price:key.price, image:key.image, auther:key.auther, qnty:1}))}}> Add to Cart </button>
//       </div>


  
//   </>
//  )
// })

// <div id="sliderImg">
        
//         {/* <Banner/> */}


//       </div>

//       <div id="featureProduct">
//             <h1> Best Sci-FI </h1>   
//             <div id="fetaureProList">
                
//                  {fetaureData}
               
                
//             </div>


//       </div>

//       <div id="featureProduct">
//             <h1>  TOP Selling Products </h1>
//             <div id="fetaureProList">
                
//                    {topSellingData}
//             </div>


//       </div>

//       <div id="featureProduct">
//             <h1> Most Popular </h1>
//             <div id="fetaureProList">
//                 {trendingData} 
//             </div>
//       </div> 






















// import { useEffect, useState } from "react";
// import axios from "axios";



// const Books=()=>{

//     const [mydata, setMydata]=useState([]);

//     const loadMydata=()=>{
//         let url="http://localhost:5002/books/displayAll";
//         axios.get(url).then((response)=>{
//             console.log(response.data.product)
//             setMydata(response.data.product)
//         })
//     }
//     useEffect(()=>{
//         loadMydata();
//     },[])

//     const ans=mydata.map((key)=>{

        
//             return(
//                 <>
//                 <div>
//                 <h4> Name: {key.name}</h4>
//                 <h4> auther: {key.auther}</h4>
//                 <h4> price: {key.price}</h4>
//                 <img src={key.image} style={{width:"205px"}}/>
    
//                 </div>
    
//                 </>
//             )
        
//     })

//     return(
//         <>
//         {ans}
        
//         </>
//     )
// }
// export default Books;


