import Navbar from "./navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chips from "./chips";
import Soda from "./soda";
import Snickers from "./snickers";
import './vending-machine.css';
import vending from './images/vending.png';

const VendingMachine = () => {

    return (
        <div className="container">
            <BrowserRouter>
                <div id='greeting' >
                    <h1>Hi I am a vending machine</h1>
                    <img src={vending} alt='vending machine' />
                </div>         

                <Routes>
                    <Route exact='true' path="/chips" element={<Chips />} />
                    <Route exact='true' path="/soda" element={<Soda />} />
                    <Route exact='true' path="/snickers" element={<Snickers />} />
                </Routes>

                <Navbar />

            </BrowserRouter>
        </div>
    )

}

export default VendingMachine;