import React from 'react';
import Fade from 'react-reveal/Fade';

import travel from '../../resources/images/projects/TravelSite.jpg'
import seals2 from '../../resources/images/projects/seals2.jpg'
import numberguess1 from '../../resources/images/projects/numberguess1.png'

const ColumnCards = () => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Successful Projects</h2>
                <div class="row-sim">
                    <div class="column-sim">
                        <div class="card-sim">
                            <h3>Travel Site</h3>
                            <br></br>
                            <img src= {travel} alt="" className="staff_pic"
                            style={{width:"100%",
                            height: "auto",
                            textAlign: "center"}}/>
                            <p>Learn to design and build a website for a business</p>
                            <br></br>
                            
                        </div>
                    </div>

                    <div class="column-sim">
                        <div class="card-sim">
                            <h3>Bugdet App</h3>
                            <br></br>
                            <img src= {seals2} alt="" className="staff_pic"
                            style={{width:"100%",
                            height: "auto",
                            textAlign: "center"}}/>
                            <p>Learn how to use JavaScript to create functions for calculations</p>
                            
                        </div>
                    </div>

                    <div class="column-sim">
                        <div class="card-sim">
                            <h3>Number Guessing Game</h3>
                            <img src= {numberguess1} alt="" className="staff_pic"
                            style={{width:"100%",
                            height: "auto",
                            textAlign: "center"}}/>
                            <p>Discover the possibilites of HTML, CSS and JavaScript combined</p>
                           
                        </div>
                    </div>

                </div>
            </div>
        </Fade>
    );
};

export default ColumnCards;