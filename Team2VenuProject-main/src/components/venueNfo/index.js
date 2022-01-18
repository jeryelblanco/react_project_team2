import React from 'react';
import Zoom from 'react-reveal/Zoom';

import Doug from '../../resources/images/staff/Doug.jpeg'
import Istish from '../../resources/images/staff/Istish.png'
import Genghis from '../../resources/images/staff/Genghis.jpg'

const VunueNfo = () => {
    return (
        <div className="bck_black">
            <h1>Meet the Staff</h1>
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {Istish} alt="" className="staff_pic"
                                        style={{width:"100%",
                                        height: "auto",
                                        textAlign: "center"}}/>
                                    <div className="vn_title">
                                        Istishna Hussian
                                    </div>
                                    <div className="vn_desc">
                                        Career Coach
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>

                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {Doug} alt="" className="staff_pic"
                                        style={{width:"100%",
                                        height: "auto",
                                        textAlign: "center"}}/>
                                    <div className="vn_title">
                                        Douglas Smith
                                    </div>
                                    <div className="vn_desc">
                                        Program Manager
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {Genghis} alt="" className="staff_pic"
                                        style={{width:"100%",
                                        height: "auto",
                                        textAlign: "center"}}/>
                                    <div className="vn_title">
                                        Genghis Lopez
                                    </div>
                                    <div className="vn_desc">
                                        Lead Instructor
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>

                </div>
            </div>
        </div>
    );
};

export default VunueNfo;