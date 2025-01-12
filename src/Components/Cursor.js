import React from "react";

export class Cursor extends React.Component{
    constructor(props){super(props)}
    
    componentDidMount(){
        const node=document.querySelector('#custom-cursor');
        window.addEventListener('mouseenter',()=>{
            document.body.appendChild(node)
            node.setAttribute('id','custom-cursor');
        })
        window.addEventListener('mousemove',(event)=>{
            node.style.setProperty('left',`${event.clientX}px`);
            node.style.setProperty('top',`${event.clientY}px`);
        })
        window.addEventListener('mouseleave',(event)=>{
            node.remove();
        })
        window.addEventListener('dblclick',()=>{
            node.classList.add('expanded');
            const animationDuration=1000*parseInt(window.getComputedStyle(node).getPropertyValue('animation-duration').replace('s',''));
            setTimeout(()=>{node.classList.remove('expanded');},animationDuration)
        }) 
    }
    render(){
        return(
            <span id='custom-cursor'></span>
        )
    }
}