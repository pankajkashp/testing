import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Timeline = () => {
    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });
  useGSAP(() => {
    timeline.to("#boxt", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duratin: 2,
    });
    timeline.to("#boxt", {
      y: 50,
      duration: 1,
    });
    timeline.to("#boxt", {
      x: 500,
      scale: 1,
      duration: 2,
      borderRadius: "8px",
      backgroundColor: "red",
    });
  }, []);

  useGSAP(()=>{
    gsap.to('.boxes',{
        y:250,
        rotation:180,
        repeat:-1,
        yoyo:true,
        borderRadius:'100%',
        stagger:{
            amount:1.5,
            axis:'y',
            grid:[1,1],
            from:'center',
        }
    })
  })

  return (
    <div>
      <button
        className="bg-cyan-500 p-2 rounded m-2"
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
      >
        Play/Pause
      </button>

      <div id="boxt" className="bg-yellow-500 w-20 h-20  m-2 rounded"></div>
      <div className='flex mt-4 pt-4 items-center justify-center'>
      <div className="boxes bg-blue-100 w-10 h-20 m-2 rounded"></div>
      <div className="boxes bg-blue-200 w-10 h-20 m-2 rounded"></div>
      <div className="boxes bg-blue-300 w-10  h-20 m-2 rounded"></div>
      <div className="boxes bg-blue-400 w-10 h-20 m-2 rounded"></div>
      <div className="boxes bg-blue-500 w-10 h-20 m-2 rounded"></div>
      <div className="boxes bg-blue-600 w-10 h-20 m-2 rounded"></div>
    </div>
    </div>
  );
};

export default Timeline;
