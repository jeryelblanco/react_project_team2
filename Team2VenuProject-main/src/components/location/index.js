import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/d/embed?mid=1WEyRJFs3Fe0P8uGYWBURIEMAcXw&hl=en&ehbc=2E312F" 
                width="100%" height="500px" frameBorder="0"
                allowFullScreen title="B R U H">

            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;



