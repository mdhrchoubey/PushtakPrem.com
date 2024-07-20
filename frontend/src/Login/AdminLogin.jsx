import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admin=()=>{

    const [name, setName]= useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();



    const handleSubmit=(e)=>{
      e.preventDefault();
      let url="http://localhost:5002/admin/adminLogin";
      axios.post(url, {name:name, password:password}).then((result)=>{
        if(result.data === "Success"){
          
          window.localStorage.setItem("userName", name);

        navigate("/adminDash")
    }else{
          alert("You are not registered to this service")
        }

      })

    }

    return(
        <>
        <div class="body">
        <div class="container">
            <form className="form">
                <div class="head">
                    <span>Sign up</span>
                    <p>Create a free account with your email.</p>
                </div>
                <div class="inputs">
                    {/* <input type="text" placeholder="Full Name"/><br/><br/> */}
                    <input type="name" placeholder="Email" name="name"
                    value={name} onChange={(e)=>{setName(e.target.value)}}
                    /><br/><br/>
                    <input type="password" placeholder="Password" name="password"
                     value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    /><br/><br/>
                </div>
                <button onClick={handleSubmit}>Admin Login</button>
            </form>
            {/* <div class="form-footer">
                <p>Have an account? <a href="#">Log in</a></p> 
            </div> */}
    
        </div>

    </div>
    
        
        </>
    )
}
export default Admin;