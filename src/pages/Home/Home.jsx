import './HomeStyles.css'
import Favoriteitem from "./Favoriteitem.jsx";
import {FavoritesData} from "./FavoritesData.jsx";
import BURG from '../imgs/vecteezy_delicious-mustard-chicken-burger-isolated-on-transparent_27144914.png/'

function Home(){
    return (
        <>
            <div className='container-fluid' id='home-container'>
                <div className='row d-flex justify-content-center align-content-center' id='food-display-row'>
                    <div className='text-center'>
                        <span className='span-block' id='restaurant-title'>BW and Penguins</span>
                        <span className='span-block' id='restaurant-tagline' >finest cuisines</span>
                    </div>
                </div>
                <div className='row p-5' id='popular-food-row'>
                    <h1 className='text-center mb-3'>Some of our favorites</h1>
                    <div className='row d-flex justify-content-center gap-4'>
                        <div className='fav-items col-md-2'>
                            <Favoriteitem
                                name={FavoritesData.tenders.name}
                                alt={FavoritesData.tenders.alt}
                                description={FavoritesData.tenders.description}
                                image={FavoritesData.tenders.image}
                            />
                        </div>
                        <div className='fav-items col-md-2'>
                            <Favoriteitem
                                name={FavoritesData.burger.name}
                                alt={FavoritesData.burger.alt}
                                description={FavoritesData.burger.description}
                                image={FavoritesData.burger.image}
                            />
                        </div>
                        <div className='fav-items col-md-2'>
                            <Favoriteitem
                                name={FavoritesData.birria.name}
                                alt={FavoritesData.birria.alt}
                                description={FavoritesData.birria.description}
                                image={FavoritesData.birria.image}
                            />
                        </div>
                    </div>
                </div>
                <div className='row p-5' id='ad-row'>
                    <div className='col-xl-4'>
                        <div>
                            <img src={BURG} alt='BURG' style={{ width: '500px', height: '300px' }} />
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <h1 className='text-center'>Get a free sandwich on us!</h1>
                        <span className='span-block text-center' id='promo'>Tweet us at <br/>
                            <a href='https://github.com/AxAnder0095/finestcuisines' id='twitter-link'>@bwpcuisines</a> <br/>
                            with the caption &#34;finest!&#34; for a chance to win a free
                            sandwich and to enter our raffle for a year of free BW and Penguins
                            Finest Cuisines!
                        </span>
                    </div>
                </div>
                <div className='row d-flex justify-content-center p-5' id='news-row'>
                    <div className='col-4 p-5' id='news-column-container'>
                        <h1 className='text-center'>News</h1>
                        <span className='span-block text-center' id='news'>
                            New location opened up in downtown Aurora! Stop by for the
                            <br/> grand opening of our newest location and get a free shake on us! <br/> We
                            are happy to open up a new location for our new customers to try out our
                            <br/> finest cuisines! Follow our social media for more information. 
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;