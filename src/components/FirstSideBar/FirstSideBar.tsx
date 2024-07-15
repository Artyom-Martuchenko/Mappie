import logo from '@/logo.png';
import saved_on from '@/saved=on.png';
import saved_off from '@/saved=off.png';
import search_off from '@/search=off.png';
import search_on from '@/search=on.png';
import user_image from '@/user_image.png';
import {Prop} from './FirstSideBarTypes'

export function FirstSideBar({mode, savedHandler} : Prop){
    return(
        <div className="first_sidebar_div">
            <div className="group_first_sidebar_div">
                <img className='logo' src={logo} alt='logo'/>
            
                <button className="search_button" onClick={() => savedHandler('search')}>
                    {mode.search ? <img src={search_on} alt='search_on'/> : <img src={search_off} alt='search_off'/>}
                </button>

                <button className="saved_button" onClick={() => savedHandler('saved')}>
                    {mode.saved ? <img src={saved_on} alt='saved_on'/> : <img src={saved_off} alt='saved_off'/>}
                </button>

                <button id="user_icon">
                    <img src={user_image} alt='user_icon'/>
                </button>
            </div>
        </div>
    )
}