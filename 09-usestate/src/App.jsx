import { useState } from "react";



const App = () => {
 const [title,setTitle]=useState("fuck");

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form submit by ",title);
    
  }
  return (
    <div className=''>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
       <input 
       type="text"
        placeholder='Enter your name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
         />
       <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;