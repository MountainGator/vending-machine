import { Link, Route } from 'react-router-dom';
import './food.css';

const BackBtn = () => {
    return (
        <div className='link-holder'>
            <Link exact="true" to='/'>Home</Link>
        </div>
    )
}

export default BackBtn;