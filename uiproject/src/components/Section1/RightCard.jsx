import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = () => {
  return (
    <div className=" h-full w-80  p-4 rounded-[4rem] relative overflow-hidden shrink-0">
      <img
        className=" w-full h-full object-cover rounded-xl"
        src="https://plus.unsplash.com/premium_photo-1661454349706-3ccb54124faa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwd29ya2luZyUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww"
        alt="data"
      />
      <RightCardContent />
    </div>
  );
};

export default RightCard;
