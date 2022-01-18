import React from 'react';
import ColumnCards from './ColumnCards';
import Description from './Description';
import Discount from './Discount';

const Highlights = () => {
    return (
        <div className="hightlight_wrapper">
            <ColumnCards/>
            <Description/>
            <Discount/>
        </div>
    );
};

export default Highlights;