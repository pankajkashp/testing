import React from "react";

const RightCard = () => {
  return (
    <div className=" h-full w-80  p-6 rounded-xl relative overflow-hidden">
      <img
        clasName=" w-full h-full object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGJhc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt="data"
      />
      <div>
        <h2 className="text-2xl font-bold mt-4">Data Analytics</h2>
      </div>
    </div>
  );
};

export default RightCard;
