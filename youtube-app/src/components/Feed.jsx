import React, { useContext, useState } from 'react';
import { Context } from '../context/contextApi';
import LeftNav from "./LeftNav.jsx";

const Feed = () => {
    return (
        <div className='flex flex-row h-[calc(100% -56px)]'>
            <LeftNav />
        </div>
    )
}

export default Feed