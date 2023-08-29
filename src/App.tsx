import React from 'react';
import './assets/css/App.css';
import house_img from './assets/img/house.jpeg'

function App() {

    return (
        <div className="w-full h-screen " >
            <img src={house_img} alt="" className='w-full h-full object-cover filter blur-md'/>
            <div className='absolute w-full h-full flex items-center justify-center top-0'>
                <div className="w-[20%] h-[90%] bg-white rounded-xl mr-6 max-lg:hidden">
                    q
                </div>
                <div className="w-[50%] h-[90%] bg-white rounded-xl max-lg:w-[85%]">
                    q
                </div>
            </div>
        </div>
    );
}

export default App;
