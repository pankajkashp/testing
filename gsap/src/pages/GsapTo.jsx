
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const GsapTo = () => {

    useGSAP(()=>{
        gsap.to('#box',{
            x:250,
            repeat:-1,
            yoyo:true,
            duration:2,
            rotation:180,


        })
    },[])

     useGSAP(()=>{
        gsap.from('#box2',{
            x:250,
            repeat:-1,
            yoyo:true,
            duration:2,
            rotation:180,

        })
    },[])

     useGSAP(()=>{
        gsap.fromTo('#box3',{
            rotation:0,
            borderRadius:0,

        },
            {
            x:250,
            repeat:-1,
            yoyo:true,
            duration:2,
            rotation:360,
            borderRadius:'100%',
            ease:'bounce.out',

        })
    },[])


  return (
    <div>
        {/* to gsap */}
        <div id ="box" className="bg-blue-500 w-20 h-20  m-2 rounded"></div>
        {/* //from gsap */}
        <div id ="box2" className="bg-blue-500 w-20 h-20 m-4 rounded"></div>
        {/* fromTo gsap */}
        
         <div id ="box3" className="bg-blue-500 w-20 h-20 rounded"></div>
    </div>
  )
}

export default GsapTo