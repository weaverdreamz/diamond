import './largenavigation.scss';
import {Link} from 'react-router-dom';
import Log from "../../assets/signin.jpg";
import CartIcon from '../cartIcon/cartIcon.component';
import Search from '../../assets/search.png';
import {useContext} from 'react';
import { SearchContext } from '../../context/search.component';




const LargeNavigation = ()=>{
    const {displaySearch, setDisplaySearch } = useContext(SearchContext);

    const displayHandler = ()=>{
       setDisplaySearch(!displaySearch)
    }

    console.log(displaySearch);
    return(
        <div className='largenav'>
            <div className='lnav'>
                <div className='logo' onClick={displayHandler}>
                    <img src={Search} alt='logo'/>
                </div>
                <h3><Link to='/'>YOURS WATCH
                    <p>always on spot</p>

                    </Link>
                </h3>
                <div className='navmenu'>
                    <div className='menus'>
                    <img src={Log} alt='login'/>

                        </div>
                        <div className='menus'>
                            <CartIcon/>
                            
                        </div>
                </div>
            </div>

            
            <div className='mymenu'>
                <div className='mymenus'>
                    ROLEX
                </div>
                <div className='mymenus'>
                    CARTIER
                </div>
                <div className='mymenus'>
                    PATEK PHILIPPE
                </div>
                
                <div className='mymenus'>
                    HUBLOT
                </div>

                <div className='mymenus'>
                    RICHARD MILLE
                </div>
            </div>

        </div>
    )
}
export default LargeNavigation;