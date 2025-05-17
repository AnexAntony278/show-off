import React from "react";
import { ColorSchemes } from '../Themes'
import { logos } from '../images/icons'
const { instaLogo, linkedInLogo, gitHubLogo } = logos;

export class ContactPage extends React.Component {

    render() {
        return (
            <div className="page" id='contact-page'
                style={{
                    display: "flex", alignItems: "end", flexDirection: "column", justifyContent: "end",
                    backgroundColor: ColorSchemes.primaryOf(this.props.theme), color: 'var(--secondaryColor)'
                }}>
                {/* <img src={wave} className="wave" style={{backgroundColor: 'var(--primaryColor)',height:'200px'}}/> */}
                <div className="wave" style={{ backgroundColor: 'var(--secondaryColor)' }}>
                    <svg height="10vh" viewBox="0 0 2520 60">
                        <path fill="var(--primaryColor)" d="M2520 51.5774C2520 51.5774 2293.76 69.5499 2160 51.5774C2026.24 33.6048 1941.59 59.9999 1801 59.9999C1660.41 59.9999 1590.65 33.1545 1440 51.5773C1289.35 70.0001 1080 51.5773 1080 51.5773L1080 -0.000126366L2520 -4.76837e-07L2520 51.5774Z" />
                        <path fill="var(--primaryColor)" d="M1440 51.5774C1440 51.5774 1213.76 69.5499 1080 51.5774C946.242 33.6048 861.588 59.9999 720.999 59.9999C580.411 59.9999 510.646 33.1545 360 51.5773C209.355 70.0001 2.14191e-05 51.5773 2.14191e-05 51.5773L2.59282e-05 -0.000126366L1440 -4.76837e-07L1440 51.5774Z" />
                    </svg>
                </div>
                <div style={{
                    width: "100%", height: "200px", backgroundColor: "var(--secondaryColor)",
                    display: "flex", flexDirection: "row", justifyContent: "space-between "
                }}>
                    <MediaBox link="https://www.instagram.com/an_ex__27/">{instaLogo}</MediaBox>
                    <MediaBox link="https://www.linkedin.com/in/anex-antony-27aug03">{linkedInLogo}</MediaBox>
                    <MediaBox link="https://github.com/AnexAntony278">{gitHubLogo}</MediaBox>
                </div>
            </div>
        )
    }
}



class MediaBox extends React.Component {
    render() {
        return (<div style={{ margin: "50px" }}>
            <a href={this.props.link} rel="noopener noreferer">
                {this.props.children}
            </a>
        </div>
        )
    }
}