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
            
                                    <p>"I don't run away from a challenge because I am afraid. Instead, I run toward it because the only way to escape fear is to trample it beneath your feet." -- Nadia Comaneci, Romania, gymnastics</p>
                                    <p>"I hated every minute of training, but I said, "Don't quit. Suffer now and live the rest of your life as a champion." -- Muhammad Ali, USA, boxing</p>
                                    <p>"Obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it." -- Michael Jordan, USA, basketball</p>
                                    <p>"It's funny because when they knew about my inline career, people would say 'Oh, we'll see you in the Olympics one day', and I'd be like, 'No, my sport's not in the Olympics and I'll never be an ice skater'. I never really imagined switching over to ice just because I loved inline so much and I hated being cold." - Erin Jackson</p>
                                    <p>"I feel that the expectations people have of me are bigger than those I put on myself. I try to maintain my rhythm while not feeling too much pressure. I also think it’s important that I find solutions to the challenges I face one by one." - Kagiyama Yuma</p>
                                    
                                

            
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