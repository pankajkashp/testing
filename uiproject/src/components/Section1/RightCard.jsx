import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className=" h-full w-80  p-4 rounded-[4rem] relative overflow-hidden shrink-0">
      <img
        className=" w-full h-full object-cover rounded-xl"
        src={props.img}
        alt="data"
      />
      <RightCardContent color={props.color}id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
