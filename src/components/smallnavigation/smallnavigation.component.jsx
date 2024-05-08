import './smallnavigation.scss';
import Signin from '../../assets/signin.jpg';
import CartIcon from '../cartIcon/cartIcon.component';
import Search from '../../assets/search.png';
import { SearchContext } from '../../context/search.component';
import {useContext} from 'react';
import { Link } from 'react-router-dom';

 
const SmallNavigation = ()=>{

    const {displaySearch, setDisplaySearch} = useContext(SearchContext);

    const displayHandler = ()=>{
        setDisplaySearch(!displaySearch);
    }
    return(
        <div className='smallnav'>
            <div className='topmenu'>

            <div className='topmenulogo' onClick={displayHandler}>
                    <img src={Search} alt='logo'/>
                </div>
                <div className='horizontals'>

                    <div className='tophorizontals'></div>
                    <div className='tophorizontals'></div>
                    <div className='tophorizontals'></div>


                </div>

               
                <div className='mobilemenuname'>
                    <Link to='/'>
                    <h2>YOURS WATCH
                        <p>always on spot</p>
                    </h2>
                    </Link>
                </div>

                <div className='mobilemenus'>
                    <img src={Signin} alt='sigin'/>
                    <CartIcon/>

                </div>
            </div>

            
        </div>

    )
}
export default SmallNavigation;