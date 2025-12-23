import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/Storecontext'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("menu")

    const {getTotalCartAmount} = useContext(StoreContext);

    // Theme handling:
    // - Persist the user's theme in `localStorage` under the key `theme`.
    // - Apply the theme by setting `data-theme` on the <html> element.
    //   See `src/index.css` for the CSS variables that change with the theme.
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') || 'light'
        } catch (e) { return 'light' }
    })

    useEffect(() => {
        // Apply theme attribute and persist selection.
        document.documentElement.setAttribute('data-theme', theme)
        try { localStorage.setItem('theme', theme) } catch (e) {}
    }, [theme])

    // Toggle theme between 'light' and 'dark'.
    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link> 
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>                    
        </ul>
        <div className="navbar-right">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? (
                    // moon icon
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
                    </svg>
                ) : (
                    // sun icon
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.76 4.84l-1.8-1.79L3.17 4.83l1.79 1.8 1.8-1.79zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zm7.04-2.04l1.79 1.8 1.79-1.79-1.8-1.8-1.78 1.79zM20 11v2h3v-2h-3zM4.83 19.17l1.79-1.79-1.8-1.8-1.79 1.79 1.8 1.8zM11 4V1h2v3h-2zM12 6a6 6 0 100 12 6 6 0 000-12z" fill="currentColor" />
                    </svg>
                )}
            </button>
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>     
    </div>
  )
}

export default Navbar