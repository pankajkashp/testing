
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
    <div className='text-white font-bold gap-4 flex text-xl'>
        <Link to='/product/Men' ><h1>Men</h1></Link>
        <Link to='/product/Women' ><h1>Women</h1></Link>
    </div>
        <Outlet/>
        </div>
  )
}

export default Product