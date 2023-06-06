import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img1 from './asset/GDPR-amico.svg';
import img2 from './asset/Formula-amico.svg';
import img3 from './asset/Office management-pana.svg'

const Carousel = () => {
    return ( 
        <div className='w-full bg-gray-200 py-10'>
            <AwesomeSlider bullets={false} className='w-full'>
                <div className='flex flex-row bg-white w-full h-3/4'>
                    <div className='bg-blue-800 text-white w-1/3 flex flex-col justify-center pl-5'>
                        <h1 className='text-6xl font-semibold'>Keep Your Data Secured</h1>
                    </div>
                    <img src={img1} alt="" className='w-2/3'/>
                </div>
                <div className='flex flex-row bg-white w-full h-3/4'>
                    <div className='bg-green-700 text-white w-1/3 flex flex-col justify-center pl-5'>
                        <h1 className='text-6xl font-semibold'>Math is not that bad</h1>
                    </div>
                    <img src={img2} alt="" className='w-2/3'/>
                </div>
                <div className='flex flex-row bg-white w-full h-3/4'>
                    <div className='bg-yellow-400 text-white w-1/3 flex flex-col justify-center pl-5'>
                        <h1 className='text-6xl font-semibold'>Manage your schedule</h1>
                    </div>
                    <img src={img3} alt="" className='w-2/3'/>
                </div>
            </AwesomeSlider> 
        </div>
     );
}
 
export default Carousel;