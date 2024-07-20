import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import {useGoogleLogin} from '@react-oauth/google';

const userName=window.localStorage.getItem("name");

const UserLogin=()=>{

  const [user, setUser]=useState("");
  // const [error, setError] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navi=useNavigate()

  const handleInput=(e)=>{
    let name =e.target.name;
    let value=e.target.value;
    setUser(values=>({...values,[name]:value}))
    }

  const handleSubmit =(e)=>{
    e.preventDefault();
      let api="http://localhost:5002/user/register"
      axios.post(api,user).then((res)=>{
       alert("data save")
       console.log(user);
       setUser( {
      name:"",
      email:"",
      password:"" 
  })})
  
  }

  // Login Code    

  const handleLoginSubmit = async (e) => {

   
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5002/user/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('name', response.data.name);
    
      alert("logged in")
      console.log(response.data)
      navi("/home")
      
    } catch (err) {
      setError(err);
    }
  };
  

// google login code 
const [token, setToken] = useState(null);
const [profile, setProfile] = useState(null);

useEffect(() => {
  // Handle token expiration
  if (token) {
    const expired = token.expires_at < Date.now() / 1000;
    if (expired) {
      setToken(null);
    }
  }
}, [token]);

const handleGoogleLogin = (googleUser) => {
  const token = googleUser.getAuthResponse().id_token;
  setToken(token);
  const profile = googleUser.getBasicProfile();
  setProfile(profile);
  // Send token to your server for verification and authentication
  fetch('http://localhost:5002/user/googlelogin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
};
// const handleGoogleLogin=()=>useGoogleLogin({

// })

  
    return(
        <>
        <div id="userLogin">
        <div className="wrapper">
        <div className="card-switch">
            <label className="switch">
               <input type="checkbox" className="toggle"/>
               <span className="slider"></span>
               <span className="card-side"></span>
               <div className="flip-card__inner">
                  <div className="flip-card__front">
                     <div className="title">Log in</div>
                     <form className="flip-card__form" action="" >
                        <input className="flip-card__input" name="email" placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="flip-card__input" name="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>

                        <h3 onClick={handleGoogleLogin}> or Sign-In With Google</h3>

                        <button className="signin">
  <svg
    viewBox="0 0 256 262"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    ></path>
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    ></path>
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    ></path>
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    ></path>
  </svg>
  Sign in with Google
</button>


                        <button className="flip-card__btn" onClick={handleLoginSubmit} >Let`s go!</button>
                     </form>
                  </div>
                  <div className="flip-card__back">
                     <div className="title">Sign up</div>
                     <form className="flip-card__form" action="" onSubmit={handleSubmit} >
                        <input className="flip-card__input" placeholder="Name" type="name" name="name" value={user.name} onChange={handleInput} />
                        <input className="flip-card__input" name="email" placeholder="Email" type="email" value={user.email} onChange={handleInput} />
                        <input className="flip-card__input" name="password" placeholder="Password" type="password" value={user.password} onChange={handleInput} />
                        <button className="flip-card__btn" type="submit"  >Confirm!</button>
                     </form>
                  </div>
               </div>
            </label>
        </div>   
   </div>
   </div>
        </>
    )
}
export default UserLogin;






// const [showPassword, setShowPassword] = useState(false);
// const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
// const navigate = useNavigate();

//     const handleSubmitLogin=async(e)=>{
//       e.preventDefault();
//       let email = e.target.email.value;
//       let password = e.target.password.value;
  
//       if (email.length > 0 && password.length > 0) {
//         const formData = {
//           email,
//           password,
//         };
//         try {
//           const response = await axios.post(
//             "http://localhost:5002/userSignup/login",
//             formData
//           );
//           localStorage.setItem('auth', JSON.stringify(response.data.token));
//           toast.success("Login successfull");
//           navigate("/home");
//         } catch (err) {
//           console.log(err);
//           toast.error(err.message);
//         }
//       } else {
//         toast.error("Please fill all inputs");
//       }
//     }



    // const [useremail, setUserEmail]=useState("");
    // const [userpassword, setUserPassword]=useState("");

    // const navigate= useNavigate();

    
   

    // const handleSubmitLogin=()=>{
    //     let url="http://localhost:5002/userSignup/login";
    //     axios.post(url, {useremail, userpassword}).then((res)=>{
    //       console.log(res.data)
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("username", res.data.username);
    //     navigate("/home");
        
    //     })

    // }

    // const Login=()=>{

    //   console.log(user);
    //   let api="http://localhost:5002/userSignup/userDashboard"
    //   axios.post(api,user).then((res)=>{
    //    alert(res.data)

    //    localStorage.setItem("token", res.data.token);
    //    localStorage.setItem("username", res.data.username);
    //    navigate("/dashboard");

    //    })
    // }
