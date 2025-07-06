import { ColorSchemes } from "../Themes";
import React, { useRef, useState } from "react";
import { usePopper } from "react-popper";
import { logos } from '../images/icons';
import '../style.css';

export function AboutPage({ theme }) {
    const [showPopper, setShowPopper] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const popperHideTimeout = useRef(null);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "top",
    });

    const handleMouseEnter = () => {
        if (popperHideTimeout.current) {
            clearTimeout(popperHideTimeout.current);
            popperHideTimeout.current = null;
        }
        setShowPopper(true);
    };

    const handleMouseLeave = () => {
        popperHideTimeout.current = setTimeout(() => {
            setShowPopper(false);
        }, 1000);
    };

    React.useEffect(() => {
        return () => {
            if (popperHideTimeout.current) clearTimeout(popperHideTimeout.current);
        };
    }, []);

    return (
        <div className='page' id='about-page'
            style={{
                backgroundColor: ColorSchemes.primaryOf(theme),
                display: "flex", alignItems: "center", justifyContent: "center"
            }}>
            <p style={{ fontSize: "20px" }}>
                from Thrissur, Kerala, India 🌴<br />
                Computer Engineering Graduate (2025).<br />
                Interested in Arts, Games, Music, Movies, Travel and Culture.<br />
                Designs and Developes Solutions.<br />
                Up for challenges. <br />
                Eager to learn.
            </p>
            <span style={{ alignSelf: "end", justifyContent: "end", padding: "5vh", position: "relative" }}>
                <a
                    href="https://drive.google.com/file/d/1-sUK7O7iyB-Ubh546egv7T2jBwYU1-k_/view?usp=drive_link"
                    download='AnexAntony.pdf'
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={setReferenceElement}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ display: "inline-block" }}
                >
                    {logos.CVLogo}
                </a>
                {showPopper && (
                    <span
                        ref={setPopperElement}
                        className="popper-tooltip"
                        style={{
                            ...styles.popper,
                            color: ColorSchemes.secondaryOf(theme),
                            fontSize: "12px"

                        }}
                        {...attributes.popper}
                    >Download CV
                    </span>
                )}
            </span>
        </div>
    );
}