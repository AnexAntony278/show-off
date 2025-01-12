import React from "react"
import { ColorSchemes } from "../Themes"
export class ToggleButton extends React.Component{
    constructor(props){super(props)}
    state={
      light:true
    }
    toggleTheme=()=>{
      this.setState({light:!this.state.light})
      this.props.onClick()
    }
    render(){
      const size=this.props.size;
      const circleStyle={backgroundColor:ColorSchemes.primaryOf(this.props.theme),borderRadius: `${size}px`,height:`${size/1.5}px`,width: `${size/1.5}px`}
      const switchStyle={backgroundColor:ColorSchemes.secondaryOf(this.props.theme),
            justifyContent:(this.state.light)?'start':"end",
            height: `${size}px`,
            width: `${1.5*size}px`,
            display: 'flex',
            alignItems: 'center',
            padding:`0px ${size/4}px` ,
            borderRadius: `${size/2}px`}

      return (
      <div className='theme-toggle'>
        <div onClick={this.toggleTheme} style={switchStyle}>
        <div onDrag={this.toggleTheme}  style={circleStyle} ></div>
      </div>
      </div>)
    }
  }