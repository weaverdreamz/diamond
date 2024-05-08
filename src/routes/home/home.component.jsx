import './home.scss';
import Rolex from '../../assets/rolex datejust custom 2500ctw diamond 41mm watch.jpg';
import Patek from '../../assets/Patek Philippe, reference 1938P.jpg';
import Cartier from '../../assets/Ballon Blanc de Cartier in steel.jpg';
import Hublot from '../../assets/HUBLOT Classic Fusion Black Magic 45mm.jpg';
import Richard from '../../assets/Richard Mille RM66 Flying Tourbillon.webp';
import {useState, useEffect} from 'react';

const Home = ()=>{

    const [mywatch, setMyWatch] = useState(0)
    const watches = [Rolex, Patek, Cartier, Hublot, Richard];
    const watchheading = ['ROLEX','PATEK PHILIPPE','CARTIER','HUBLOT','RICHARD MILLE'];
    const watchtext = ['The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist', ' Enter the Patek Philippe universe to discover watches that suit any wrist', 'Discover watches that define your personality. Excellence in every tick. Embrace the art of timekeeping. Unlock timeless elegance on your wrist', 'Discover, Step Up Your Wrist Game, Unleash The Power Of Time On Your Wrist,experience The Luxury Of Fine Timepieces from Hublot.', 'Discover The World Of Precision, Unleash Your Ultimate Accessory. Watches That Stand The Test Of Time.']

    return(

        <div className='home'>


        <div className='imageSlider'>
            <img src={watches[mywatch]} alt={watches[mywatch]}/>

            <div className='overlay'></div>
            <div className='toptext'>
                <div className='textxontainer'>
                    <h2>{watchheading[mywatch]}</h2>
                    <p>{watchtext[mywatch]}</p>
                </div>

                <h2>EXPLORE</h2>
            </div>
        </div>

        

    </div>

    )
    

    

}
export default Home;