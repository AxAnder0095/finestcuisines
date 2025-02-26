import './SubMenuStyling.css'

function Appetizers(){
    return (
        <>
            <div className='col-6 extended-menu-container'>
                <div className='appetizer-items d-flex justify-content-center'>
                    <div className='app-name-desc'>
                        <h4>Mozzarella Sticks</h4>
                    <p>Beer battered mozzarella sticks with your choice of dipping sauce</p>
                    </div>
                    <div className='ps-3 d-flex align-items-center'>
                        <button className='order-button'>Order Now</button>
                    </div>
                </div>
                <div className='appetizer-items d-flex justify-content-center'>
                    <div className='app-name-desc'>
                        <h4>Potato Skins</h4>
                        <p>Loaded potato skins with bacon, cheese and sour cream</p>
                    </div>
                    <div className='ps-3 d-flex align-items-center'>
                        <button className='order-button'>Order Now</button>
                    </div>
                </div>
                <div className='appetizer-items d-flex justify-content-center'>
                    <div className='app-name-desc'>
                        <h4>Spicy Chicken Bites</h4>
                        <p>Sweet and Spicy chicken bites with a side of dipping sauce</p>
                    </div>
                    <div className='ps-3 d-flex align-items-center'>
                        <button className='order-button'>Order Now</button>
                    </div>
                </div>
                <div className='appetizer-items d-flex justify-content-center'>
                    <div className='app-name-desc'>
                        <h4>Jalapeno Poppers</h4>
                        <p>Spicy Jalapeno poppers with your choice of dipping sauce</p>
                    </div>
                    <div className='ps-3 d-flex align-items-center'>
                        <button className='order-button'>Order Now</button>
                    </div>
                </div>
                <div className='appetizer-items d-flex justify-content-center'>
                    <div className='app-name-desc'>
                        <h4>Chuck Roast Sliders</h4>
                        <p>Slow cooked chuck roast for 8 hours on a potato roll</p>
                    </div>
                    <div className='ps-3 d-flex align-items-center'>
                        <button className='order-button'>Order Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appetizers