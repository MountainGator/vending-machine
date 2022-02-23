import './food.css';

const Food = ({src, alt}) => {
    return (
        <div className='food-holder'>
            <h2>{alt}</h2>
            <img src={src} alt={alt} className='food-img' />
        </div>
    )
}

export default Food;