import logo from '@/logo.png';
import saved_on from '@/saved=on.png';
import saved_off from '@/saved=off.png';
import search_off from '@/search=off.png';
import search_on from '@/search=on.png';
import user_image from '@/user_image.png';
import {Prop} from './FirstSideBarTypes'
import { Link } from 'react-router';
import { useState } from 'react';

export function FirstSideBar(){ // {mode, savedHandler} : Prop 
    const [mode, setMode] = useState<"search"| "saved" | "">()
    
    const clickHandler = (prop : "search" | "saved") => {
        setMode((prevstate) => prop === prevstate ? "" : prop)
    }
    
    return(
        <div className="first_sidebar_div">
            <div className="group_first_sidebar_div">
                <img className='logo' src={logo} alt='logo'/>
            
                <Link className="search_button" onClick={() => clickHandler("search")} to={mode === "search" ? ".." : "/search"}>
                    {mode === "search" ? <img src={search_on} alt='search_on'/> : <img src={search_off} alt='search_off'/>}
                </Link>
                {/* {mode.search ? <img src={search_on} alt='search_on'/> : <img src={search_off} alt='search_off'/>} */}

                <Link className="saved_button" onClick={() => clickHandler("saved")} to={mode === "saved" ? ".." : "/saved"}>
                    {mode === "saved" ? <img src={saved_on} alt='saved_on'/> : <img src={saved_off} alt='saved_off'/>}
                </Link>
                {/* {mode.saved ? <img src={saved_on} alt='saved_on'/> : <img src={saved_off} alt='saved_off'/>} */}

                <button id="user_icon">
                    <img src={user_image} alt='user_icon'/>
                </button>
            </div>
        </div>
    )
}