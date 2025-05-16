import { ColorSchemes } from "../Themes";
import React from "react";
import { logos } from '../images/icons'
export class AboutPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='page' id='about-page'
                style={{ backgroundColor: ColorSchemes.primaryOf(this.props.theme), display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontSize: "20px", }}>
                    From Kerala, India 🌴<br />
                    Pursuing Computer Science Degree.<br />
                    Interested in Arts, Juegos, Music, Movies, Travel and Culture.<br />
                    Design and Develope Software Solutions.<br />
                    Up for challenges.
                </p>
                <span style={{ alignSelf: "end", justifyContent: "end", padding: "5vh" }}>
                    <a href="/assets/AnexResume_2024.pdf" download='AnexResume_2024.pdf'>{logos.CVLogo}</a>
                </span>
            </div>
        )
    }
}