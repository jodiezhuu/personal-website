import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick]=useState(false);
    const [button, setButton]=useState(true)

    const handleClick= () => setClick(!click);
    const closeMobileMenu= () => setClick(false);
    
    const showButton=() => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/personal-website" className="navbar-logo" onClick={closeMobileMenu}>
                    JoZhu<i className="i.fab.fa-typo3"></i>  
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/personal-website' className='nav-links' onClick={closeMobileMenu}>
                            Home <i className="i.fab.fa-typo3"></i>  
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'} />
                </div>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='experience' className='nav-links' onClick={closeMobileMenu}>
                            Experience
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' onClick={()=>window.open('https://drive.google.com/file/d/1z3xazSLaVVBP0YyLCHjU0jv6gGyvlZRe/view?usp=sharing')}>RESUME</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
