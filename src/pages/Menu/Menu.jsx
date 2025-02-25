import './MenuStyles.css'

function Menu(){
    return (
        <div className='container-fluid' id='menu-container'>
            <div className='row border border-dark' id='menu-container-intro'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <span id='menu-title'>Menu</span>
                </div>
            </div>
            <div className='row d-flex justify-content-center gap-4 mt-4 mb-4' id='menu-container-foods-1'>
                <div className='col-2 bg-primary text-center menu-type'>Appetizers</div>
                <div className='col-2 bg-success text-center menu-type'>Burgers</div>
                <div className='col-2 bg-secondary text-center menu-type'>Chicken</div>
            </div>
            <div className='row d-flex justify-content-center gap-4 mt-4 mb-4' id='menu-container-foods-2'>
                <div className='col-2 bg-primary text-center menu-type'>Sides</div>
                <div className='col-2 bg-success text-center menu-type'>Salads</div>
                <div className='col-2 bg-secondary text-center menu-type'>Drinks</div>
            </div>
        </div>
    )
}

export default Menu;