import React from 'react';

export const Header = () => {
    return (
        <div className='fixed w-full h-12 flex items-center justify-between bg-neutral-800 px-9 border-neutral-700 border-b-2'>
            <div className='mb-8 pt-8'>
                <h1 className='text-white'>E-learning</h1>
            </div>
            <div className='text-white'>
                User
            </div>
        </div>
    );
};


