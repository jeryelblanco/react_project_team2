
import React, { Component } from 'react'
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

import energy_logo from '../../resources/images/logos/energy_logo.jpg';
import spotify_logo from '../../resources/images/logos/spotify_logo.png';
import teladoc_logo from '../../resources/images/logos/teladoc_logo.jpg';

class Pricing extends Component{
    state={
        prices:[energy_logo,spotify_logo,teladoc_logo,teladoc_logo,teladoc_logo,teladoc_logo],
        positions:['EnergyWatch','Spotify','TelaDoc', 'TelaDoc','TelaDoc','TelaDoc'],
        desc:[
            'Energy Sector', 'Music Sector', 'Health Sector', 'TelaDoc','TelaDoc','TelaDoc'
        ],
        linkto:['https://energywatch-inc.com/','https://www.spotify.com/us/','https://www.teladoc.com/','https://www.teladoc.com/','https://www.teladoc.com/','https://www.teladoc.com/'],
        delay:[500,500,500,500,500,500]

    }

    showBoxes = () =>(
        this.state.prices.map((_box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className = "pricing_item">
                    <div className = "pricing_inner_wrapper">
                        <div className = "pricing_title">
                            <img src= {this.state.prices[i]} alt=""
                            style={{width:"100%",
                             height: "7.5rem",
                             textAlign: "center"}}/>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className = "pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className = "pricing_buttons">
                            <MyButton
                                text = "Learn More"
                                bck = "#ffa800"
                                color = "#ffffff"
                                link = {this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render(){
        return(
            <div className = "bck_black">
                <div className = "center_wrapper pricing_section">
                    <h2>Beijing 2022 Schedule</h2>
                    <p>Click a sport to learn more about when and where it takes place</p>
                    <div className = "pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;