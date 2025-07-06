import React, { useEffect, useRef, useState } from "react";
import { ToggleButton as ThemeButton } from './ToggleButton'
import { ColorSchemes } from "../Themes";

export function ControlBar({ theme, setTheme }) {
    const [visible, setVisible] = useState(true);
    const inactivityTimeout = useRef(null);

    // Auto-hide logic (optional, remove if not needed)
    useEffect(() => {
        const handleActivity = (e) => {
            if (e.type === 'mousemove' && e.clientY < 100) {
                setVisible(true);
                resetInactivityTimer();
                return;
            }
            setVisible(true);
            resetInactivityTimer();
        };
        const resetInactivityTimer = () => {
            if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);
            inactivityTimeout.current = setTimeout(() => setVisible(false), 3000);
        };
        window.addEventListener('scroll', handleActivity);
        window.addEventListener('mousemove', handleActivity);
        return () => {
            window.removeEventListener('scroll', handleActivity);
            window.removeEventListener('mousemove', handleActivity);
            if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);
        };
    }, []);

    const changeLightMode = () => {
        setTheme({
            lightMode: !theme.lightMode,
            colorScheme: 0
        });
    };

    return (
        <div
            className="control-bar"
            style={{
                width: '100vw',
                position: 'fixed',
                margin: "40px 0px",
                zIndex: "999",
                display: visible ? 'flex' : 'none',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                transition: 'opacity 0.5s',
                opacity: visible ? 1 : 0,
            }}
            onMouseEnter={() => setVisible(true)}
        >
            <p></p>
            <NavBar theme={theme} />
            <ThemeButton onClick={changeLightMode} theme={theme} size={40} />
        </div>
    );
}

function NavBar({ theme }) {
    const [pages] = useState(['home', 'about', 'contact']);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const extraScrollvalue = window.visualViewport ? window.visualViewport.height / 2 : window.innerHeight / 2;
        const pagesOffsetTop = pages.map(pagename =>
            document.getElementById(`${pagename}-page`)?.offsetTop - extraScrollvalue
        );
        pagesOffsetTop.push(2000);
        const onScroll = () => {
            for (let i = pagesOffsetTop.length - 2; i >= 0; i--) {
                if (
                    pagesOffsetTop[i] <= window.scrollY &&
                    pagesOffsetTop[i + 1] > window.scrollY &&
                    i !== selectedIndex
                ) {
                    setSelectedIndex(i);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
        // eslint-disable-next-line
    }, [pages, selectedIndex]);

    const navigateTo = (index) => {
        setSelectedIndex(index);
        document.getElementById(`${pages[index]}-page`)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <div className="nav-bar" style={{
            borderRadius: '25px', width: '50vw', height: '50px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',
            backgroundColor: ColorSchemes.accentOf(theme)
        }}>
            {pages.map((page, i) => (
                <NavItem
                    id={page}
                    isSelected={selectedIndex === i}
                    key={i}
                    onClick={() => navigateTo(i)}
                    theme={theme}
                />
            ))}
        </div>
    );
}

function NavItem({ id, isSelected, onClick, theme }) {
    return (
        <div
            className="navItem"
            style={{
                borderRadius: "20px",
                padding: "5px clamp(1.04vw, 4vw, 60px)",
                backgroundColor: isSelected ? ColorSchemes.secondaryOf(theme) : ColorSchemes.primaryOf(theme),
                color: isSelected ? ColorSchemes.primaryOf(theme) : ColorSchemes.secondaryOf(theme),
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center"
            }}
            onClick={onClick}
        >
            {id.toUpperCase()}
        </div>
    );
}

