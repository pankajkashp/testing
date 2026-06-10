import Navbar from './Navbar.jsx'
import Page1Content from './Page1Content.jsx'

const Section1 = (props) => {
  return (
<div className='w-full h-screen p-10'>
   <Navbar/>
   <Page1Content users={props.users}/>
   </div>
  )
}

export default Section1