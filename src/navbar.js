import { Sling as Hamburger } from 'hamburger-react'
import { GoSearch } from 'react-icons/go'
import Profile from './asset/images.jpg'
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { BsBellFill, BsHouse, BsHouseFill, BsMessenger } from 'react-icons/bs';


const Navbar = () => {
    return ( 
        <div className="flex flex-col space-y-5 w-full bg-gray-200 p-5">
            <div className="w-full bg-slate-900 flex flex-row justify-between text-white p-2 rounded">
                <div className='flex flex-row space-x-2 items-center relative'>
                    <FaShoppingCart/>
                    <input type="text" className='bg-transparent w-40 rounded border-2 px-2 pl-6 border-slate-700 focus:outline-none focus:border-cyan-600' placeholder='Search'/>
                    <GoSearch className='absolute left-5'/>
                </div>
                <Hamburger size={25}/>
            </div>
            <div className='w-full bg-white flex flex-row justify-between text-blue-600 p-2 rounded shadow-lg'>
                <div className='flex flex-row space-x-3 items-center'>
                    <img src={Profile} alt="" className='w-10 rounded-full'/>
                    <h1 className='text-xl font-semibold'>Username</h1>
                </div>
                <div className='flex flex-row space-x-5 items-center'>
                    <BsHouseFill className='text-2xl hover:text-blue-400 hover:cursor-pointer'/>
                    <BsBellFill className='text-2xl hover:text-blue-400 hover:cursor-pointer'/>
                    <BsMessenger className='text-2xl hover:text-blue-400 hover:cursor-pointer'/>
                </div>
            </div>
            <div className='w-full bg-zinc-900 flex flex-row justify-between text-red-600 p-2 rounded items-center'>
                <Hamburger size={25} direction="right"/>
                <div>
                    <h1 className='text-3xl italic'>ZINC</h1>
                </div>
                <div className='flex flex-row space-x-2'>
                    <h1 className='text-base hover:text-red-400 cursor-pointer'>HOME</h1>
                    <h1 className='text-base hover:text-red-400 cursor-pointer'>PRODUCT</h1>
                    <h1 className='text-base hover:text-red-400 cursor-pointer'>BLOG</h1>
                    <h1 className='text-base hover:text-red-400 cursor-pointer'>ABOUT</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;