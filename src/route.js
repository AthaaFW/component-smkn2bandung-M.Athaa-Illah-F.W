import {Routes,Route} from 'react-router-dom';
import Component from './Component'


const Router = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Component/>}/>
        </Routes>
     );
}
 
export default Router;