import React from "react";
import {ToggleButton as ThemeButton} from './ToggleButton'
import { ColorSchemes } from "../Themes";
export class ControlBar extends React.Component{
    constructor(props){
        super(props)
    }
    changeLightMode=()=>{
        this.props.setTheme({
            lightMode:!this.props.theme.lightMode,
            colorScheme:0
        })
    }
    render(){
        return(
            <div className="control-bar" style={{width: '100vw',position:'fixed',margin:"20px 0px",zIndex:"999",
                display:'flex',flexDirection: 'row',alignItems: 'center',justifyContent:'space-evenly'}}>
                <p></p>
                <NavBar theme={this.props.theme} />
                <ThemeButton onClick={this.changeLightMode} theme={this.props.theme} size={40}/>
            </div>
        )
    }
}
class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pages:['home','about','contact',],
            selectedIndex:0
        }
    }
    componentDidMount(){
        const extraScrollvalue=visualViewport.height/2;
        const pagesOffsetTop=[]
        this.state.pages.map((pagename)=>{
            pagesOffsetTop.push(document.getElementById(`${pagename}-page`).offsetTop-extraScrollvalue)
        });pagesOffsetTop.push(2000); //to set an upper bound

        window.addEventListener('scroll',()=>{  
            for (let i = pagesOffsetTop.length-2; i>=0 ; i--) {
                if(pagesOffsetTop[i]<=window.scrollY && pagesOffsetTop[i+1]>window.scrollY && i!=this.state.selectedIndex){
                    this.setState({selectedIndex:i});
                    break;
                }
            }
        });

    }
    navigateTo=(index)=>{
        this.setState({selectedIndex:index})
        document.getElementById(`${this.state.pages[index]}-page`).scrollIntoView({
            behavior:"smooth"
        })
    }

    NavItems=()=>{
        const items=[]
        for (let i=0;i<this.state.pages.length;i++){
            items.push(
                <NavItem id={this.state.pages[i]}
                         isSelected={(this.state.selectedIndex===i)}
                         key={i}
                         onClick={()=>{this.navigateTo(i)}}
                         theme={this.props.theme}
                         />
            )
        }
        return items;
    }
    render(){
        return(
            <div className="nav-bar" style={{ borderRadius:' 25px',width: '50vw',height:' 50px',
                        display: 'flex',alignItems: 'center',justifyContent: 'space-evenly',
                        backgroundColor:ColorSchemes.accentOf(this.props.theme)}}>
                {this.NavItems()}
            </div>
        )
    }
}


class NavItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const selected=this.props.isSelected;
        return(
            <div className="navItem"  style={{borderRadius:"20px",width:"clamp(25%,30%,30%)",padding:"4px 0px",
            backgroundColor:selected?ColorSchemes.secondaryOf(this.props.theme):ColorSchemes.primaryOf(this.props.theme),
            color:selected?ColorSchemes.primaryOf(this.props.theme):ColorSchemes.secondaryOf(this.props.theme),
            display:'flex',alignItems:'center', justifyContent:"center"}} onClick={this.props.onClick} >
               {this.props.id.toUpperCase()} 
            </div>
        )
    }
}

