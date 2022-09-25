import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import OverflowPhones from '../Overflows/OwerflowPhones';
import OverflowWhatches from '../Overflows/OverflowWhatches';
import ImgPhones from '../../Img/telefon_planshet.png';
import ImgWhatches from '../../Img/saatlar_qolbaqlar.png';
import ImgComputers from '../../Img/komputer_ofis.png';




export default props => {
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
    <Menu >
   <div className=''  >
            <div className=' d-flex' >
                <div className=" overflowMenu">
                    <div className="phones" onMouseOver={mouseOver}  onMouseOut={mouseOut}>
                        <a href=''>
                            <button type="button">
                            <img src={ImgPhones}></img>
                                <h4>Telefonlar və Planşetlər</h4>
                            </button>

                        </a>
                    </div>
                    <div className="watches" onMouseOver={mouseOver1}  onMouseOut={mouseOut1}>
                        <a href=''>
                            <button type="button">
                            <img src={ImgWhatches}></img>
                                <h4>Saatlar və qolbaqlar</h4>
                            </button>

                        </a>
                    </div>
                    <div className="tv">
                        <a href=''>
                            <button type="button">
                                <img src={ImgPhones}></img>
                                <h4> TV,audio video</h4>

                            </button>
                        </a>

                    </div>
                   
                    <div className="phones">
                        <a href=''>
                            <button type="button">
                            <img src={ImgPhones}></img>
                                <h4>Telefonlar və Planşetlər</h4>
                            </button>

                        </a>
                    </div>
                    <div className="watches">
                        <a href=''>
                            <button type="button">
                            <img src={ImgWhatches}></img>
                                <h4>Saatlar və qolbaqlar</h4>
                            </button>

                        </a>
                    </div>
                    <div className="tv">
                        <a href=''>
                            <button type="button">
                            <img src={ImgPhones}></img>
                                <h4> TV,audio video</h4>

                            </button>
                        </a>

                    </div>
                    <div className="computers">
                        <a href=''>
                            <button type="button">
                            <img src={ImgComputers}></img>
                                <h4>Komputerlər və aksesuarlar</h4>
                            </button>

                        </a>
                    </div>

                </div>
                <div className="OverflowPhonesMenu  " style={{ opacity: 1, position: "absolute" }} onMouseOver={mouseOver}  onMouseOut={mouseOut} id={isHovering ? "activeMenu" : null}>

                    <OverflowPhones />
                </div>
                <div className="OverflowWhatchesMenu  " style={{ opacity: 1, position: "absolute" }} onMouseOver={mouseOver1}  onMouseOut={mouseOut1} id={isHovering1 ? "activeMenu" : null}>

                    <OverflowWhatches />
                </div>
            </div>

        </div>

    </Menu>
  );
};