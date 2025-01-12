import React from "react";
import { ColorSchemes} from '../Themes'

export class HeroPage extends React.Component{
    render(){
        return(
            <div className="page" id='home-page' 
            style={{backgroundColor:ColorSchemes.primaryOf(this.props.theme),
                display:"flex",alignItems:"end"}}>
                <div style={{width:"60%", padding:"5vh 3vw"}}>
                    <h2 >Hey, I'm </h2>
                    <h1>Anex Antony</h1>    
                    <p>
                    Computer Science Student and Full- Time Human<br/>
                    Batman by night 🕹️🎮. Stupid & 21.<br/>
                    BEA-uty of life :) 
                    </p>
                
                </div>
                

            </div>
        )
}
}