import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task,setTask] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(title,detail);

    const copyTask=[...task]
    copyTask.push({title,detail})

    setTask(copyTask)
    setTitle('')
    setDetail('')
  }
  function handleDelete(e){
     const copyTask=[...task]
    copyTask.splice(e,1)

    setTask(copyTask)
  }
  return (
    <div className="bg-black h-screen w-screen  p-5 justify-between items-center lg:flex gap-4">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          console.log("Form submitted");
        }}
        className="flex flex-col gap-4"
      >
        <h1 className="text-white text-2xl font-bold mb-4">Add Notes</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter you note"
          className="bg-gray-800 font-medium text-white px-4 py-2 border border-blue-500 rounded "
        ></input>
        <textarea 
        className="bg-gray-800 font-medium text-white px-4 py-2 border border-blue-500 rounded"
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value);
        }}
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      <div>
        <h1 className="text-white text-2xl font-bold mt-4 ">Recent Notes</h1>
        <div className="mt-8 h-[90%] w-full flex gap-4 overflow-x-auto">
          {task.map(function(elem,ind){
            return <div key={ind} className="h-52 w-40 bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8UoY1H5Gz_7dJ6XGuqq14-48n4YUGbcKgQ&s')] rounded-xl p-4  ">
              <h1 className="text-black text-lg  leading-tight font-bold mb-2 uppercase">{elem.title}</h1>
              <p className="text-black text-sm uppercase">{elem.detail}</p>
              <button 
              onClick={()=>{
                handleDelete(ind)
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-4"
              > 
                Delete
              </button>
            </div>
          })}
          
        </div>
      </div>
    </div>
  );
};

export default App
