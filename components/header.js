"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Menu from "../public/header/menu-svgrepo-com.svg";


export default function Header() {
    const SIDEBAR_WIDTH = "256px";
    const SIDEBAR_CLASS_NAMES = "dynamic-bg z-500 h-[100vh] min-w-[" + SIDEBAR_WIDTH + "] max-w-[100vw] px-[24px] py-[24px] fixed flex flex-col overflow-scroll";

    const [showSidebar, setShowSidebar] = useState(false);
    const [showOnLeftSide, setShowOnLeftSide] = useState(false);

    function setButtonLocation() {
        const button = document.getElementById("sidebarButton");
        button.style.top = "10px"
        showOnLeftSide ? button.style.left = "10px" : button.style.right = "10px";
    }

    function toggleSidebar() {
        setShowSidebar(!showSidebar);
        const sidebar = document.getElementById("sidebarPopup");
        if (showSidebar) {
            if (showOnLeftSide) {
                sidebar.style.left = "0px";
            } else {
                sidebar.style.right = "0px";
            }
        } else {
            if (showOnLeftSide) {
                sidebar.style.left = "-" + SIDEBAR_WIDTH;
            } else {
                sidebar.style.right = "-" + SIDEBAR_WIDTH;
            }
        }
    }

    function NavigationTitle({ titleIn }) {
        return <div className="font-bold pt-[32px] pb-[8px]"> <h3>{titleIn}</h3> </div>;
    }

    function NavigationLink({ hrefIn, titleIn }) {
        return <Link href={hrefIn} className="p-[8px]" onClick={toggleSidebar}>{titleIn}</Link>;
    }

    useEffect(() => {
        toggleSidebar();
        setButtonLocation();
    }, [showOnLeftSide]);

    return (
        <div>
            <img id="sidebarButton" className="z-999 dark:invert fixed" height="25px" width="25px" src="https://www.svgrepo.com/show/532195/menu.svg" onClick={toggleSidebar}/>
            <div className="dynamic-bg header z-500 h-[48px] w-[100vw] t-[-64px] p-[12px] fixed flex flex-row justify-between">
                <div className="flex flex-col justify-around content-around">
                    <Link href="/">Title</Link>
                </div>
            </div>
            <div id="sidebarPopup" className={SIDEBAR_CLASS_NAMES}>
                <NavigationTitle titleIn="Navigation" />
                <NavigationLink hrefIn="/calendar" titleIn="Calendar" />
                <NavigationLink hrefIn="/gallery" titleIn="Gallery" />
                <NavigationLink hrefIn="/page1" titleIn="Page1" />
            </div>
        </div>
    );
}
