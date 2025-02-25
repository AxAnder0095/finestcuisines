import './MenuStyles.css'
import BURGER from '../imgs/burg.jpg'
import CHICKEN from '../imgs/tenders.jpg'
import {Link} from 'react-router-dom'

function Menu(){
    return (
        <div className='container-fluid' id='menu-container'>
            <div className='row border border-dark' id='menu-container-intro'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <span id='menu-title'>Menu</span>
                </div>
            </div>
            <div className='row d-flex justify-content-center gap-4 mt-4 mb-4' id='menu-container-foods-1'>
                <div className='col-2 text-center menu-type'>
                    <div className='inner-menu-type'>
                        <div>
                            <img src={BURGER} alt="appetizer image" className='menu-images'/>
                        </div>
                        <h4 className='pt-3 pb-3'>Appetizers</h4>
                        <Link to={"/menu/appetizers"} className='sub-menu-button'> View More</Link>
                    </div>
                </div>
                <div className='col-2 text-center menu-type'>
                    <div className='inner-menu-type'>
                        <div>
                            <img src={BURGER} alt="appetizer image" className='menu-images'/>
                        </div>
                        <h4 className='pt-3 pb-3'>Burgers</h4>
                        <Link to={"/"} className='sub-menu-button'> View More</Link>
                    </div>
                </div>
                <div className='col-2 text-center menu-type'>
                    <div className='inner-menu-type'>
                        <div>
                            <img src={CHICKEN} alt="appetizer image" className='menu-images'/>
                        </div>
                        <h4 className='pt-3 pb-3'>Chicken</h4>
                        <Link to={"/"} className='sub-menu-button'> View More</Link>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-center gap-4 mt-4 mb-4' id='menu-container-foods-2'>
                <div className='col-2 text-center menu-type'>
                    <div className='inner-menu-type'>
                        <div>
                            <img src={BURGER} alt="appetizer image" className='menu-images'/>
                        </div>
                        <h4 className='pt-3 pb-3'>Sides</h4>
                        <Link to={"/"} className='sub-menu-button'> View More</Link>
                    </div>
                </div>
                <div className='col-2 text-center menu-type'>
                    <div className='inner-menu-type'>
                        <div>
                            <img src={BURGER} alt="appetizer image" className='menu-images'/>
                        </div>
                        <h4 className='pt-3 pb-3'>Salads</h4>
                        <Link to={"/"} className='sub-menu-button'> View More</Link>
                    </div>
                </div>
                <div className='col-2 text-center menu-type'>
                    <div className='inner-menu-type'>
                        <div>
                            <img src={BURGER} alt="appetizer image" className='menu-images'/>
                        </div>
                        <h4 className='pt-3 pb-3'>Drinks</h4>
                        <Link to={"/"} className='sub-menu-button'> View More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;