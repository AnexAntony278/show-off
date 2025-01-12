export class ColorSchemes{
    static light0={
        primary:'whitesmoke',
        secondary:'black',
        accent:'grey',
    }
    static dark0={
        primary:'black',
        secondary:'whitesmoke',
        accent:'grey',
    }
    
    static primaryOf=(theme)=>{
        const {lightMode,colorScheme}=theme;
        return(ColorSchemes[`${(lightMode)?'light':'dark'}${colorScheme}`].primary)
    }
    static secondaryOf=(theme)=>{
        const {lightMode,colorScheme}=theme;
        return(ColorSchemes[`${(lightMode)?'light':'dark'}${colorScheme}`].secondary)
    }
    static accentOf=(theme)=>{
        const {lightMode,colorScheme}=theme;
        return(ColorSchemes[`${(lightMode)?'light':'dark'}${colorScheme}`].accent)
    }
}
