import React from 'react';
import {LessonBlock} from "../components";

export const MyCourse = () => {
    return (
        <div className='text-black w-full pl-4 pt-16 overflow-y-scroll bg-neutral-200'>
            <div>
                <h1 className='font-medium'>Week 1. Getting started with hooks.</h1>
            </div>
            <div className='mt-5 flex gap-8 flex-wrap'>
                <LessonBlock/>
                <LessonBlock/>
                <LessonBlock/>
            </div>
        </div>
    );
};
