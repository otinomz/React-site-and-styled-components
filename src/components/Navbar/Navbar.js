import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './Navbar.elements'
import {IconContext} from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)
    
    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                            ULTRA
                        </NavLogo>

                        <HamburgerIcon onClick={handleClick}>
                            { click ? <FaTimes /> : <FaBars/> }
                        </HamburgerIcon>

                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to = '/'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = '/services'>Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = '/products'>Products</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
