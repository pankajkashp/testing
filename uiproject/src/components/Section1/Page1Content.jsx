

import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1Content = (props) => {
  return (
    <div className='w-full h-full px-10 py-10 flex flex-row gap-20'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content;