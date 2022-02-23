import './food.css';
import BackBtn from './food-back';
import Food from './food';
import chips from './images/ghost-chips.png';

const Chips = () => {

    return (
        <div className='holder'>
            <BackBtn />
            <Food src={chips} alt='chips' />        
        </div>
    )

}

export default Chips;