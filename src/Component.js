import Navbar from './navbar';
import Btn from './Btn.js';
import Card from './card';
import Carousel from './carousel'

const Component = () => {
    return ( 
        <div className="w-full h-screen flex flex-col items-center bg-white pt-24 space-y-12">
            <section id="navbar" className="flex flex-col space-y-5 items-start w-2/3">
                <h1 className="text-5xl">Navbar</h1>
                <div className="p-5 border-2-black rounded w-full">
                    <Navbar/>
                </div>
            </section>

            <section id='btn' className='flex flex-col space-y-5 items-start w-2/3'>
                <h1 className='text-5xl'>Button</h1>
                <div className='p-5 border-2-black rounded w-full'>
                    <Btn/>
                </div>
            </section>

            <section id='card' className='flex flex-col space-y-5 items-start w-2/3'>
                <h1 className='text-5xl'>Card</h1>
                <div className='p-5 rounded w-full'>
                    <Card/>
                </div>
            </section>

            <section id='carousel' className='flex flex-col items-start w-2/3'>
                <h1 className='text-5xl'>Carousel</h1>
                <div className='p-5 rounded w-full'>
                    <Carousel/>
                </div>
            </section>
        </div>
     );
}
 
export default Component;