import background from "../images/background.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import madhushala from "../images/books/africa risen.jpeg";
import mereBaad from "../images/books/mind games.jpeg";
import hunkaar from "../images/books/the martin.jpeg";
import hunkr from "../images/books/the poppy war.jpeg";
import headimg from "../images/heading.jpg";




const Home=()=>{


    return(
        <>
        <div>
            <img src={headimg} style={{width:"100%"}}/>
        </div>  
        <div className="Content" >
        <div className="text_Content">
            <h5>
            If you don’t like to read, <br/> you haven’t <br/> found the right book.
            </h5>
            <br/>
            <h4>"J.K. Rowling"</h4>
            <br/>
            <h5>
            Books and doors are the<br/> same thing. You open <br/>them, and you go through<br/> into another world.
            </h5>
            <br/>
            <h4>
                "Jeanette Winterson"
            </h4>
        </div>

            <div>
            <img src={background}  />   
            </div>
        
        </div>

{/* 
        <div>
            <img src={headimg} style={{width:"100%"}}/>
        </div> */}


        {/* end of content ........................ */}
        <div className="heading">
        <h3>Popular Books</h3>
        </div>
        <div >

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <img src={img5}/></SwiperSlide>
        <SwiperSlide><img src={img}/></SwiperSlide>
      </Swiper>

       </div>

       <div className="corusel">
        <h2 style={{textAlign:"center", marginTop:"10px"}}> Best Sci-Fi Books</h2>
       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          
        <div className="silde1">

<div class="card-container">
<div class="card">
<div class="img-content">
<img src={madhushala} style={{width:"250px",height:"350px"}}/>
</div>
<div class="content">
<p class="heading">africa Risen</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipii
voluptas ten mollitia pariatur odit,
</p>


</div>
</div><br/>
{/* <button className="AddtoCart" >Add to Cart</button> */}
</div>



{/* Silde 11111111111111111111111111111111111111111111111111111111111  */}

<div class="card-container">
<div class="card">
<div class="img-content">
<img src={mereBaad} style={{width:"250px",height:"350px"}}/>
</div>
<div class="content">
<p class="heading">Galaxy</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipii
voluptas ten mollitia pariatur odit,
</p>
</div>
</div><br/>
{/* <button className="AddtoCart" >Add to Cart</button> */}
</div>
{/* slide 22222222222222222222222222222222222222222222222222222222 */}

 <div class="card-container">
 <div class="card">
 <div class="img-content">
 <img src={hunkaar} style={{width:"250px",height:"350px"}}/>
 </div>
 <div class="content">
 <p class="heading">Mind Games</p>
 <p>
 Lorem ipsum dolor sit amet, consectetur adipii
 voluptas ten mollitia pariatur odit, 
</p>
</div>
</div><br/>
{/* <button className="AddtoCart" >Add to Cart</button> */}
</div>
{/* slide 3333333333333333333333333333333333333333333333333 */}
<div class="card-container">
<div class="card">
<div class="img-content">
<img src={hunkr} style={{width:"250px",height:"350px"}}/>
</div>
<div class="content">
<p class="heading">The Martin</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipii
voluptas ten mollitia pariatur odit, ab
</p>

</div>

</div> <br/>
{/* <button className="AddtoCart" >Add to Cart</button> */}
</div>

{/* slide 4444444444444444444444444444444444444444444444444444444444444444444444 */}


     
     
     
</div>

        </SwiperSlide>
      </Swiper>
       </div>
       {/* Trending Products.......................................... */}

       <div className="heading" style={{marginTop:"20px"}}>
        <h3>Popular Books</h3>
        </div>
        <div >

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <img src={img4}/></SwiperSlide>
        <SwiperSlide><img src={img2}/></SwiperSlide>
      </Swiper>

       </div>

       <div className="corusel">
        <h2 style={{textAlign:"center", marginTop:"10px"}}> Best Poetry Books</h2>
       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          
        <div className="silde1">

<div class="card-container">
<div class="card">
<div class="img-content">
<img src={madhushala} style={{width:"250px",height:"350px"}}/>
</div>
<div class="content">
<p class="heading">Madhu Shala</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipii
voluptas ten mollitia pariatur odit,
</p>
</div>
</div><br/>
{/* <button className="AddtoCart" >Add to Cart</button> */}
</div>

{/* Silde 11111111111111111111111111111111111111111111111111111111111  */}

<div class="card-container">
<div class="card">
<div class="img-content">
<img src={mereBaad} style={{width:"250px",height:"350px"}}/>
</div>
<div class="content">
<p class="heading">Madhu Shala</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipii
voluptas ten mollitia pariatur odit,
</p>
</div>
</div><br/>
{/* <button className="AddtoCart" >Add to Cart</button> */}
</div>
{/* slide 22222222222222222222222222222222222222222222222222222222 */}

 <div class="card-container">
 <div class="card">
 <div class="img-content">
 <img src={hunkaar} style={{width:"250px",height:"350px"}}/>
 </div>
 <div class="content">
 <p class="heading">Madhu Shala</p>
 <p>
 Lorem ipsum dolor sit amet, consectetur adipii
 voluptas ten mollitia pariatur odit,
</p>
</div>
</div><br/>
{/* <button className="AddtoCart" >Add to Cart</button> */}
</div>
{/* slide 3333333333333333333333333333333333333333333333333 */}
<div class="card-container">
<div class="card">
<div class="img-content">
<img src={hunkaar} style={{width:"250px",height:"350px"}}/>
</div>
<div class="content">
<p class="heading">Madhu Shala</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipii
voluptas ten mollitia pariatur odit,
</p>
</div>
</div><br/>
{/* <button className="AddtoCart" >Add to Cart</button> */}
</div>
{/* slide 4444444444444444444444444444444444444444444444444444444444444444444444 */}


     
     
     
</div>

        </SwiperSlide>
      </Swiper>
       </div>
        
        </>
    )
}
export default Home;






