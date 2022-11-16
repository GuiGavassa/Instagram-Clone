import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { FiPlusSquare } from 'react-icons/fi'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'

import { IconContext } from 'react-icons'

import './style.css'

export function Header() {
    return (
        <header className="header">

            <div className="container">
                <img className='logo' src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>

                    <input placeholder='Pesquisar' />
                </div>
                <div className='menu-icons'>
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div><AiFillHome /></div>
                        <div><RiMessengerLine /></div>
                        <div><FiPlusSquare /></div>
                        <div><MdOutlineExplore /></div>
                        <div><FiHeart /></div>   
                    </IconContext.Provider>

                    <img className='img-user' src="https://github.com/GuiGavassa.png" />
                </div>
            </div>


        </header>
    );
}