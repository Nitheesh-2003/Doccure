import React,{ Component} from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import {IMG01, IMG02, IMG03, IMG05, IMG10, IMG11, IMG12, IMG13} from './img';
import Map from "../doctorgrid/map";
import img1 from "../../../assets/images/feature-01.jpg";
import img2 from "../../../assets/images/feature-02.jpg";
import img3 from "../../../assets/images/feature-03.jpg";
import img4 from "../../../assets/images/feature-04.jpg";
// import img5 from "../../../../assets/images/feature-04.jpg";

const MyComponent=(props)=>{

        return(
            
            <div>                            
                <SRLWrapper>            
                <ul className="clinic-gallery">
                    <li >
                        <a>
                            <img src={img1} alt="Feature" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img  src={img2} alt="Feature" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={img3} alt="Feature"/>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={img4} alt="Feature" data-attribute="SRL"/>
                        </a>
                    </li>
                </ul>
            
                </SRLWrapper>
            </div>
                           
        );
    }


export default MyComponent;