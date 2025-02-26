import './LocationsStyles.css'

function Locations(){
    return (
        <>
            <div className='container-fluid' id='locations-container'>
                <div className='row d-flex justify-content-center p-5'>
                    <span className='text-center' id='locations-header'>Disclaimer</span>
                    <span className='text-center' id='locations-desc'>
                    This is not a real website where you can order food. This is a project I made for fun
                    and for learning react js more in depth. I initially didnt know what type of website
                    I wanted to make after making my first personal website, but while talking to one of
                    my friends, he suggested i make a restaurant themed website with a special theme, the
                    the theme mostly being really silly names for some of the food items. Eventually after two
                    days of going back an fourth on what website I wanted to make, I came to the decision of
                    making this website. I hope you enjoyed viewing this site!
                </span>
                </div>
                <div className='row'></div>
            </div>
        </>
    )
}

export default Locations;