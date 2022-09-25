import React from 'react'
import Carousel from '../Carousels/Carousel'
import { useState } from 'react';
import OverflowPhones from '../Overflows/OwerflowPhones';
import OverflowWhatches from './OverflowWhatches';
import ImgPhones from '../../Img/telefon_planshet.png';
import ImgWhatches from '../../Img/saatlar_qolbaqlar.png';
import ImgComputers from '../../Img/komputer_ofis.png';
import ImgTv from '../../Img/TV_audio_video.png';



function Overflow() {

    const [isHovering, setIsHovering] = useState(false);
    const mouseOver = () => {
        setIsHovering(true);

    };

    const mouseOut = () => {
        setIsHovering(false);
    };
    const [isHovering1, setIsHovering1] = useState(false);
    const mouseOver1 = () => {
        setIsHovering1(true);

    };

    const mouseOut1 = () => {
        setIsHovering1(false);
    };

    return (
        <div className='d-flex'  >
            <div className=' d-flex' >
                <div className=" overflow">
                    <div className="phones" onMouseOver={mouseOver}  onMouseOut={mouseOut}>
                        <a href=''>
                            <button type="button">
                                <img src={ImgPhones}></img>
                                <span>Telefonlar və Planşetlər</span>
                            </button>

                        </a>
                    </div>
                    <div className="watches" onMouseOver={mouseOver1}  onMouseOut={mouseOut1}>
                        <a href=''>
                            <button type="button">
                                <img src={ImgWhatches}></img>
                                <span>Saatlar və qolbaqlar</span>
                            </button>

                        </a>
                    </div>
                    <div className="tv">
                        <a href=''>
                            <button type="button">
                            <img src={ImgTv}></img>
                                <span> TV,audio video</span>

                            </button>
                        </a>

                    </div>
                    <div className="computers">
                        <a href=''>
                            <button type="button">
                                <img src={ImgComputers}></img>
                                <span>Komputerlər və aksesuarlar</span>
                            </button>

                        </a>
                    </div>
                    <div className="phones">
                        <a href=''>
                            <button type="button">
                            <img src={ImgPhones}></img>
                                <span>Telefonlar və Planşetlər</span>
                            </button>

                        </a>
                    </div>
                    <div className="watches">
                        <a href=''>
                            <button type="button">
                            <img src={ImgWhatches}></img>
                                <span>Saatlar və qolbaqlar</span>
                            </button>

                        </a>
                    </div>
                    <div className="tv">
                        <a href=''>
                            <button type="button">
                                <img src={ImgTv}></img>
                                <span> TV,audio video</span>

                            </button>
                        </a>

                    </div>
                    <div className="computers">
                        <a href=''>
                            <button type="button">
                            <img src={ImgComputers}></img>
                                <span>Komputerlər və aksesuarlar</span>
                            </button>

                        </a>
                    </div>

                </div>
                <div className="overflow21  " style={{ opacity: 0, position: "absolute" }} onMouseOver={mouseOver}  onMouseOut={mouseOut} id={isHovering ? "active" : null}>

                    <OverflowPhones />
                </div>
                <div className="overflow22  " style={{ opacity: 0, position: "absolute" }} onMouseOver={mouseOver1}  onMouseOut={mouseOut1} id={isHovering1 ? "active" : null}>

                    <OverflowWhatches />
                </div>
            </div>


            <div>
                <Carousel />
            </div>

        </div>



    );
}

export default Overflow
