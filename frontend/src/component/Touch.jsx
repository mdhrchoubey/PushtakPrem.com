


const Touch=()=>{
    return(
        <>
        <form className="formtouch">
    
    <div className="flextouch">
        <label>
            <input required="" placeholder="first name" type="text" className="inputtouch"/>
            <span>first name</span>
        </label>

        <label>
            <input required="" placeholder="Last Name" type="text" className="inputtouch"/>
            <span>last name</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="email" type="email" className="inputtouch"/>
        <span>email</span>
    </label> 
        
    <label>
        <input required="" type="tel" placeholder="Contact Number" className="inputtouch"/>
        <span>contact number</span>
    </label>
    <label>
        <textarea required="" rows="3" placeholder="message" className="inputtouch01"></textarea>
        <span>message</span>
    </label>
    
    <button className="fancytouch" href="#">
      <span className="top-keytouch"></span>
      <span className="texttouch">submit</span>
      <span className="bottom-key-1touch"></span>
      <span className="bottom-key-2touch"></span>
    </button>
</form>
        
        </>
    )
}

export default Touch;