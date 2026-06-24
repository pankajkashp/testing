import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [userdata, setUserdata] = useState("");
  const [index, setIndex] = useState(1);

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`,);
    setUserdata(response.data);

  };
  useEffect(() => {
    getdata();
  }, [index]);
  let printData = (
    <h3 className="text-gray-500 absolute top-1/2 left-1/2 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
      Loading...
    </h3>
  );
  if (userdata.length > 0) {
    printData = userdata.map(function (elem, idx) {
      return (
        <a href={elem.url} target="_blank" rel="noopener noreferrer" key={idx}>
          <div className="bg-black" key={idx}>
            <div className="h-50">
              <img
                src={elem.download_url}
                alt=""
                className="object-cover h-full border border-1px-solid-red roundeds"
              />
            </div>
            <h1 className="text-white text-lg font-bold">{elem.author}</h1>
          </div>
        </a>
      );
    });
  }

  return (
    <div className="bg-black h-screen p-4 overflow-auto">
      <div></div>
      <div className="text-white flex flex-wrap gap-4 justify-center  ">
        {printData}

      </div>
      <div className="flex justify-center items-center mt-4">
      <button style={{opacity:index==1?0.5:1}}
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1);
            setUserdata([]);
          }
        }}
        className="bg-yellow-500 text-black font-bold border border-1px-solid-red rounded px-4 py-2 m-2 "
      >
        Prev
      </button>
        <h3 className="text-white">Page {index}</h3>
      <button
        onClick={() => {
          setIndex(index + 1);
          setUserdata([]);
        }}
        className="bg-yellow-500 text-black font-bold border border-1px-solid-red rounded px-4 py-2 m-2 "
      >
        next
      </button>
      </div>
    </div>
  );
};

export default App;
