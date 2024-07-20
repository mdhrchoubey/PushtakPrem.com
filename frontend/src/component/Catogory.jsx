import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../Slice/BookSlice";

const Catogory=()=>{

    const dispatch=useDispatch();
    const myitems=useSelector((state)=>{state.cartItems.cart});
    console.log(myitems);

    const [featureProduct, setFeatureProduct]= useState([]);
    const [topsellingProduct, setTopSellingProduct]= useState([]);
    const [trendingProduct, settrendingProduct]= useState([]);
    const [mydata, setMydata]=useState([]);

    const loadFetureProduct=()=>{
        let url="http://localhost:5002/books/fetureProductDisplay";
        axios.get(url).then((res)=>{
            console.log(res.data.product);
            setFeatureProduct(res.data.product);
        });
    }

    const loadTopSellingProduct=()=>{
        let url="http://localhost:5002/books/topsellingProductDisplay";
        axios.get(url).then((res)=>{
            console.log(res.data.product);
            setTopSellingProduct(res.data.product);
        });
    }

    const loadtrendingProduct=()=>{
        let url="http://localhost:5002/books/trendingProductDisplay";
        axios.get(url).then((res)=>{
            console.log(res.data.product);
            settrendingProduct(res.data.product);
        });
    }

    useEffect(()=>{
        loadFetureProduct();
        loadTopSellingProduct();
        loadtrendingProduct();

    }, []);

    const fetaureData= featureProduct.map((key)=>{
        return(
         <>
             <div id="pro1">
                 <img src={key.image} style={{width:"250px", height:"300px"}} />
                 <br/>
                 {key.name}
                 <br/>
                 {key.auther}
                 <br/>
                 Price :  {key.price} /-
                 <br/><button id="buttonCart">Rent</button>
                 <button id="buttonCart" onClick={
         ()=>{dispatch(addtoCart({id:key._id, name:key.name, price:key.price, image:key.image, auther:key.auther, qnty:1}))}}> Add to Cart </button>
             </div>


         
         </>
        )
    })



    const topSellingData= topsellingProduct.map((key)=>{
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
              <br/><button id="buttonCart">Rent</button>
              <button id="buttonCart" onClick={
         ()=>{dispatch(addtoCart({id:key._id, name:key.name, price:key.price, image:key.image, auther:key.auther, qnty:1}))}}> Add to Cart </button>
          </div>


      
      </>
     )
 })


 const trendingData= trendingProduct.map((key)=>{
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
              <br/><button id="buttonCart">Rent</button>
              <button id="buttonCart" onClick={
         ()=>{dispatch(addtoCart({id:key._id, name:key.name, price:key.price, image:key.image, auther:key.auther, qnty:1}))}}> Add to Cart </button>
          </div>


      
      </>
     )
 })

    return(
        <>
        <div id="sliderImg">
        
        {/* <Banner/> */}


      </div>

      <div id="featureProduct">
            <h1> Best Sci-FI </h1>   
            <div id="fetaureProList">
                
                 {fetaureData}
               
                
            </div>


      </div>

      <div id="featureProduct">
            <h1>  TOP Selling Products </h1>
            <div id="fetaureProList">
                
                   {topSellingData}
            </div>


      </div>

      <div id="featureProduct">
            <h1> Most Popular </h1>
            <div id="fetaureProList">
                {trendingData} 
            </div>
      </div> 
        
        </>
    )
}
export default Catogory;