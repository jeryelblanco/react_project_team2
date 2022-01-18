import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState ({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    {/* <Fade onReveal = {() => this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade> */}

                        <div className="discount_description">
                        <Slide right>
                            <h3>Some Quotes from our Instrutor</h3>
                        </Slide>
                            <Fade delay={500}>
                                <blockquote>
                                    <p>“It’s 3pm, why am I not drunk yet?”</p>
                                    <p>“Taco tuesdays”</p>
                                    <p>“Rule 4: I am always right”</p>
                                    <p>“I’m going to go on a run”</p>
                                </blockquote>
                            </Fade>

                            <MyButton text="Click Here To Learn More About The TTP Bootcamp" bck="#ffa800" color="#ffffff" link="https://www.techtalentpipeline.nyc/" />

                        </div>

                </div>
            </div>
        );
    }
}

export default Discount;