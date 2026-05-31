

import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1Content = () => {
  return (
    <div className='w-full h-full px-10 py-10 flex flex-row gap-20'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content;