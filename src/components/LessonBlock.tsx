import React from 'react';
import youtube from "../assets/img/youtube.png";

export const LessonBlock = () => {
    return (
        <div className='w-52 bg-neutral-800 flex flex-col items-center justify-between rounded-xl overflow-hidden'>
            <div className='h-full w-36 flex items-center'>
                <img src={youtube} alt="" className='w-full h-full'/>
            </div>

            <div className='bg-neutral-50 w-full flex flex-col items-center px-1.5 py-3'>
                <h1 className='text-center'>Working with React hooks</h1>
                <div className='w-full flex justify-between py-2'>
                    <p>Video • 3m</p>
                    <p>Done</p>
                </div>
            </div>
        </div>
    );
};

