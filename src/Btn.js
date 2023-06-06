import {useState} from 'react'
import './btn.css'
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {FaEquals, FaTimes} from 'react-icons/fa'
import {RiDivideFill} from 'react-icons/ri'
import { Spin as Hamburger } from 'hamburger-react'

const Btn = () => {

    const[arrow, setArrow] = useState(false)
    const onArrow = () =>{
        setArrow(!arrow)
    }

    return ( 
        <div className="flex flex-col justify-between w-full bg-gray-200 p-5 space-y-10">
            <div className="flex flex-row space-x-5">
                <button className="p-2 bg-gray-900 text-cyan-500 rounded-lg border-2 border-cyan-600">Click Me!</button>
                <button className="p-2 bg-cyan-500 text-gray-900 rounded-lg border-2 border-gray-900">Click Me!</button>
                <button className="p-2 bg-gray-500 text-cyan-300 rounded-lg border-2 border-cyan-300 cursor-not-allowed">Click Me!</button>
                <button className="p-2 bg-gray-900 text-cyan-500 rounded-lg border-2 border-cyan-600 hover:bg-cyan-500 hover:text-gray-900 hover:border-gray-900">Click Me!</button>
            </div>
            <div className="flex flex-row">
                <button className='p-2 text-blueSec bg-white shadow-lg rounded z-30' onClick={onArrow}> <Hamburger size={30} direction="right"/></button>
                <div className={arrow?'hamburger-bar text-blueSec shadow-lg':'hamburger-bar hide'}>
                    <h1>Home</h1>
                    <h1>Home</h1>
                    <h1>Home</h1>
                </div>
            </div>
            <div className='flex flex-row space-x-7'>
                    <button className='p-2 text-xl text-white bg-blueSec rounded-full'> <AiOutlineMinus size={20} /> </button>
                    <button className='p-2 text-xl text-white bg-blueSec rounded-full'> <AiOutlinePlus size={20} /> </button>
                    <button className='p-2 text-xl text-white bg-blueSec rounded-full'> <FaTimes size={20} /> </button>
                    <button className='p-2 text-xl text-white bg-blueSec rounded-full'> <RiDivideFill size={20} /> </button>
                    <button className='p-2 text-xl text-white bg-blueSec rounded-full'> <FaEquals size={20} /> </button>
            </div>
        </div>
     );
}
 
export default Btn;