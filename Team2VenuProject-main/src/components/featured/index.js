import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="event_name">
                <div className="wrapper">
                2022 Beijing Olympics
                </div>
            </div>

            <TimeUntil/>

        </div>
    );
};

export default Featured;