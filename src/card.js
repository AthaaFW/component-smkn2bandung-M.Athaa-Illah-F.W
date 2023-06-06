import { FaCheck } from 'react-icons/fa';
import Prof from './asset/images.jpg';
import Darlung from './asset/dadar gulung.jpg';
import Risol from './asset/Risol.jpg';
import Roti from './asset/roti.jpg'

const Card = () => {
    return ( 
        <div className="flex flex-col space-y-5 w-full bg-gray-200 p-5 h-fit">
            <div className="flex flex-row space-x-5">
                <div className="flex flex-col bg-slate-900 rounded-lg w-1/4 relative justify-center">
                    <div className='flex flex-col justify-center items-center'>
                    <img src={Prof} alt="" className='w-32 rounded-full p-5 items-center'/>
                    </div>
                    <div className='flex flex-col bg-white p-4 rounded-b-lg items-center'>
                        <h1 className='text-xl text-slate-900'>Username</h1>
                        <h1 className=' text-slate-600'>Web Developer</h1>
                        <button className='p-2 px-5 bg-slate-900 text-white rounded-full mt-10'>Contact</button>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 rounded-lg w-1/4 relative justify-center">
                    <div className='flex flex-col justify-center items-center'>
                    <img src={Prof} alt="" className='w-32 rounded-full p-5 items-center'/>
                    </div>
                    <div className='flex flex-col bg-white p-4 rounded-b-lg items-center'>
                        <h1 className='text-xl text-slate-900'>Username</h1>
                        <h1 className=' text-slate-600'>Web Developer</h1>
                        <button className='p-2 px-5 bg-slate-900 text-white rounded-full mt-10'>Contact</button>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 rounded-lg w-1/4 relative justify-center">
                    <div className='flex flex-col justify-center items-center'>
                    <img src={Prof} alt="" className='w-32 rounded-full p-5 items-center'/>
                    </div>
                    <div className='flex flex-col bg-white p-4 rounded-b-lg items-center'>
                        <h1 className='text-xl text-slate-900'>Username</h1>
                        <h1 className=' text-slate-600'>Web Developer</h1>
                        <button className='p-2 px-5 bg-slate-900 text-white rounded-full mt-10'>Contact</button>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 rounded-lg w-1/4 relative justify-center">
                    <div className='flex flex-col justify-center items-center'>
                    <img src={Prof} alt="" className='w-32 rounded-full p-5 items-center'/>
                    </div>
                    <div className='flex flex-col bg-white p-4 rounded-b-lg items-center'>
                        <h1 className='text-xl text-slate-900'>Username</h1>
                        <h1 className=' text-slate-600'>Web Developer</h1>
                        <button className='p-2 px-5 bg-slate-900 text-white rounded-full mt-10'>Contact</button>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-row space-x-5'>
                <div className='flex flex-col w-1/3 pt-4 bg-gray-400 rounded-lg'>
                    <div className='flex flex-col items-center bg-white pt-5 space-y-5'>
                        <h1 className='font-bold text-lg'>Starter</h1>
                        <h1 className='font-bold text-2xl'>Free</h1>
                    </div>
                    <div className='flex flex-col bg-white p-5 mt-15'>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> Up to 1Mbps </h1>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> 10GB Cloud</h1>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> Waiting 30 sec </h1>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> Ads </h1>
                    </div>
                    <div className='flex flex-col w-full bg-white p-5'>
                        <button className='bg-white text-green-500 border-2 border-green-500 p-2 text-center rounded-lg'>Choose Starter</button>
                    </div>
                </div>
                <div className='flex flex-col w-1/3 pt-4 bg-green-500 rounded-lg'>
                    <div className='flex flex-col items-center bg-white pt-5 space-y-5'>
                        <h1 className='font-bold text-lg'>Bolt</h1>
                        <h1 className='font-bold text-2xl'>20$/month</h1>
                    </div>
                    <div className='flex flex-col bg-white p-5 mt-15'>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> Up to 20Mbps </h1>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> 50GB Cloud</h1>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> No waiting</h1>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> no ads </h1>
                    </div>
                    <div className='flex flex-col w-full bg-white p-5'>
                        <button className='bg-green-500 text-white p-2 text-center rounded-lg border-white border-2'>Choose Bolt</button>
                    </div>
                </div>
                <div className='flex flex-col w-1/3 pt-4 bg-blue-700 rounded-lg'>
                    <div className='flex flex-col items-center bg-white pt-5 space-y-5'>
                        <h1 className='font-bold text-lg'>Sonic</h1>
                        <h1 className='font-bold text-2xl'>35$/month</h1>
                    </div>
                    <div className='flex flex-col bg-white p-5 mt-15'>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> No speed limit! </h1>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> 150GB Cloud</h1>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> No waiting</h1>
                        <h1 className='flex flex-row items-center text-gray-500'><FaCheck/> no ads </h1>
                    </div>
                    <div className='flex flex-col w-full bg-white p-5 '>
                        <button className='bg-blue-700 text-white p-2 text-center rounded-lg border-white border-2'>Choose Sonic</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-row space-x-5'>
                <div className='flex flex-col rounded-lg justify-center w-1/3 bg-white shadow-lg'>
                    <img src={Roti} alt="" className='w-full rounded-t-lg'/>
                    <div className='flex flex-col space-y-3 items-center p-5'>
                        <h1 className='text-3xl'>Roti</h1>
                        <h1 className='text-3xl text-green-700'>Rp.5000</h1>
                        <button className='text-xl bg-green-700 text-white rounded-full px-10 p-2'>Buy</button>
                    </div>
                </div>
                <div className='flex flex-col rounded-lg justify-center w-1/3 bg-white shadow-lg'>
                    <img src={Risol} alt="" className='w-full rounded-t-lg h-full'/>
                    <div className='flex flex-col space-y-3 items-center p-5'>
                        <h1 className='text-3xl'>Risol</h1>
                        <h1 className='text-3xl text-green-700'>Rp.2000</h1>
                        <button className='text-xl bg-green-700 text-white rounded-full px-10 p-2'>Buy</button>
                    </div>
                </div>
                <div className='flex flex-col rounded-lg justify-center w-1/3 bg-white shadow-lg'>
                    <img src={Darlung} alt="" className='w-full h-full rounded-t-lg'/>
                    <div className='flex flex-col space-y-3 items-center p-5'>
                        <h1 className='text-3xl'>Dadar Gulung</h1>
                        <h1 className='text-3xl text-green-700'>Rp.3000</h1>
                        <button className='text-xl bg-green-700 text-white rounded-full px-10 p-2'>Buy</button>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Card;