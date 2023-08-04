import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import {Tooltip, OverlayTrigger}from 'react-bootstrap';
import {IMG01, IMG02, IMG03, IMG04, IMG05, IMG_sp_02, IMG_sp_03, IMG_sp_04, IMG_sp_05, IMG_fe_01, IMG_fe_02, IMG_fe_03, IMG_fe_04} from './img';
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import img1 from "../../../../assets/images/feature-01.jpg";
import img2 from "../../../../assets/images/feature-02.jpg";
import img3 from "../../../../assets/images/feature-03.jpg";
import img4 from "../../../../assets/images/feature-04.jpg";

const MyComponent=(props)=>{

        return(
            
            <div>                            
                <SRLWrapper>            
                <ul className="clinic-gallery">
                    <li >
                        <a>
                            <img src={IMG_fe_01} alt="Feature" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img  src={IMG_fe_02} alt="Feature" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={IMG_fe_03} alt="Feature"/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={IMG_fe_04} alt="Feature" data-attribute="SRL"/>
                        </a>
                    </li>
                </ul>
            
                </SRLWrapper>
            </div>
                           
        );
    }


export default MyComponent;