import './FavoriteItemStyles.css'

function Favoriteitem(favoritesProps){
    return (
        <>
            <div className='row p-2' id='favorite-container'>
                <h3>{favoritesProps.name}</h3>
                <h6>{favoritesProps.description}</h6>
                <div className='d-flex justify-content-center mt-3 mb-3'>
                    <img src={favoritesProps.image} id='food-image' alt={favoritesProps.alt} />
                </div>
            </div>
        </>
    )
}

export default Favoriteitem