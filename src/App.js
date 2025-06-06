import { useState } from "react";
import { HeroPage } from './Pages/HeroPage'
import { AboutPage } from './Pages/AboutPage'
import { ContactPage } from './Pages/ContactPage'
import { ControlBar } from './Components/ControlBar'
import { Cursor } from "./Components/Cursor";
import { ColorSchemes } from "./Themes";
import './style.css';

export const App = () => {
    const [theme, setTheme] = useState({ lightMode: false, colorScheme: 0 });

    //Change theme variable in CSS root variables;
    const rootEl = document.querySelector(":root");
    rootEl.style.setProperty("--primaryColor", `${ColorSchemes.primaryOf(theme)}`);
    rootEl.style.setProperty("--secondaryColor", `${ColorSchemes.secondaryOf(theme)}`);
    rootEl.style.setProperty("--accentColor", `${ColorSchemes.accentOf(theme)}`);

    return (
        <div>
            <Cursor />
            <ControlBar theme={theme} setTheme={setTheme} />
            <HeroPage theme={theme} />
            <AboutPage theme={theme} />
            <ContactPage theme={theme} />
        </div>
    )

}