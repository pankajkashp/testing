
import 'remixicon/fonts/remixicon.css'
import Hero from './Hero';
import Arrow from './Arrow';
const LeftContent = () => {
  return (
    <div className='w-1/4 p-4 rounded-2xl flex flex-col gap-3 justify-between pt-20'>
     <Hero/>
     <Arrow/>

    </div>
  )
}

export default LeftContent;