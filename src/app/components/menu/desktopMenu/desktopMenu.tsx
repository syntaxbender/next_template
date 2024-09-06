import React from 'react'
import desktopMenu from "./desktopMenu.module.css"
import Link from 'next/link';


const DesktopMenu = ({items}) => {
    const menuCollector = [];
    for(const item of items){
        menuCollector.push(<div><Link href={item.link}>{item.title}</Link></div>)
    }
    return (
        <nav className={desktopMenu.mainNav}>
            {menuCollector}
        </nav>
    )
}

export default DesktopMenu