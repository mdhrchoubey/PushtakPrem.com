import { useState } from "react";
import axios from "axios";


const UploadBook=()=>{

    const [input, setInput] = useState({});
  const [selectedFile, setSelectedFile]= useState("");
  const [imgUrl, setImgUrl]= useState("");

  const handleFileChange=(e)=>
    {
     setSelectedFile(e.target.files[0]);
    }



  const handleInput=(e)=>{

      let name=e.target.name;
      let value=e.target.value;

      setInput(values=>({...values, [name]:value}));
      console.log(input);
  }


 const handleSubmit=async(e)=>{
  e.preventDefault();
  
  try {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'fahaytoq');
    formData.append('cloud_name', 'dubhjweuj');
    const response = await axios.post('https://api.cloudinary.com/v1_1/dubhjweuj/image/upload', formData);
    console.log('Image uploaded:', response.data);
    console.log('Image uploaded:', response.data.url);
    setImgUrl(response.data.url);
    let imgpath=response.data.url;
    let input2={...input, "imgpath":imgpath};
    console.log(input2);
    const res1 = await axios.post('http://localhost:5002/books/uploadbooks',input2);

    if(res1)
      {
        alert("Data successfully Uploaded!!!");
      }
  }
  catch (error) {
    console.error('Error uploading image:', error);
  }

 }



    return(
        <>
        <div className="uploadBook">
          <h1> Upload Books</h1>

<div style={{width:"500px"}}>
  <form id="uploadContent">
    <label className="uploadbox" for="fname">Product  Name</label>&nbsp;
    <input className="uploadbox" type="text" id="fname" name="pname"  value={input.pname}    onChange={handleInput}  /><br/>
    <label className="uploadbox" for="lname">Auther Name</label>&nbsp;
    <input className="uploadbox" type="text" id="lname" name="authname"  value={input.authname}    onChange={handleInput}  /><br/>

    <label className="uploadbox" for="country">Category</label> &nbsp;&nbsp;&nbsp;<br/>
    <select className="uploadbox" id="country" name="category" value={input.category}    onChange={handleInput} style={{width:"300px"}} ><br/>
        <option>Select Category</option>
      <option value="science">Sci-Fi</option>
      <option value="bio">Bio-Graphy</option>
      <option value="Kids">Comics</option>
      <option value="history">History</option>
      <option value="sprituals">Sprituals</option>
    </select>
    <br/>
        
            {/* if ({category==scince}) {
                <div className="uploadBook">
                <select>
                    <option value="science">Harry Potter</option>
                    <option value="science">Time Machine</option>
                    <option value="science">Sci-Fi</option>
                </select>
                </div>
                
            } */}
        


    <label className="uploadbox" for="country">Select Tags</label>&nbsp;&nbsp;&nbsp;<br/>
    <select className="uploadbox" id="country" name="tags" value={input.tags}    onChange={handleInput} style={{width:"300px"}} ><br/>
      <option >Tags</option><br/>
      <option value="bestSci">Best Sci-Fi</option>
      <option value="topselling">Top Selling Products</option>
      <option value="trending">Most Popular</option>
    </select>
    <br/>
    <label className="uploadbox" for="lname">Enter Price</label><br/>
    <input className="uploadbox" type="text" id="lname" name="price" value={input.price}    onChange={handleInput}  /> <br/>
    <label className="uploadbox" for="lname"> Upload image</label>
    <input className="uploadbox" type="file" id="lname" name="file"  onChange={handleFileChange} /><br/>

    <input  type="submit" value="Submit"  onClick={handleSubmit}/><br/>
  </form>
</div>
</div>
        
        </>
    )
}
export default UploadBook;