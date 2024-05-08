import LargeNavigation from '../../components/largenavigation/largenavigation.component';
import SmallNavigation from '../../components/smallnavigation/smallnavigation.component';
import {Outlet} from 'react-router-dom';
import './navigation.scss';
import Searchmenu from '../../components/searchmenu/searchmenu.component';
import { SearchContext } from '../../context/search.component';
import { useContext } from 'react';

const Navigation = ()=>{

    const {displaySearch} = useContext(SearchContext)

    
    return(
        <div className='navigation'>
            <div className='empty'></div>
            {
                displaySearch&&<Searchmenu/>
            }
            <LargeNavigation/>
            <SmallNavigation/>
            <Outlet/>

        </div>
    )
}
export default Navigation;