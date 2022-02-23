import './food.css';
import BackBtn from './food-back';
import Food from './food';
import soda from './images/soda.png';

const Soda = () => {
    return (
        <div className='holder'>
            <BackBtn />
            <Food src={soda} alt='soda' />        
        </div>
    )
}

export default Soda;