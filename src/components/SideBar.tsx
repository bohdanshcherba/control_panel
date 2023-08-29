import React, {useState} from 'react';
import {Link} from "react-router-dom";

export const SideBar = () => {

    const navMenu = [
        {name: "Dashboard", link: '/'},
        {name: "My Course", link: '/course'},
        {name: "Schedule", link: '/schedule'},
        {name: "Messages", link: '/schedule'},
        {name: "Settings", link: '/schedule'},
    ]

    const [selected, setSelected] = useState('Dashboard');
    const handleClick = (option: string) => {
        setSelected(option)
    }

    return (
        <div className='h-screen w-60 bg-neutral-800 px-8 rounded-r-2xl pt-12 max-sm:hidden'>

            <div className='text-white flex flex-col'>
                {navMenu.map((el) => {
                    return <Link to={el.link}
                                 key={el.name}
                                 className={`py-2 px-1 rounded cursor-pointer hover:bg-neutral-700 ${selected === el.name && 'underline'}`}
                                 onClick={() => handleClick(el.name)}>{el.name}</Link>
                })}
            </div>
            <div className={'absolute bottom-5 '}>
                <h1 className='text-white'>Log out</h1>
            </div>
        </div>
    );
};


