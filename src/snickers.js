import './food.css';
import BackBtn from './food-back';
import Food from './food';
import snickers from './images/snickers.png';

const Snickers = () => {
    return (
        <div className='holder'>
            <BackBtn />
            <Food src={snickers} alt='snickers' />        
        </div>
    )
}

export default Snickers;