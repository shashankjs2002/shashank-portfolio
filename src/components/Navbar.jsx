import React, { useState } from 'react'


const Navbar = () => {
  let initialMenu = 'block'
  if(window.innerWidth < 900){
    initialMenu = 'none'
  }

  const [showMenu, setShowMenu] = useState(initialMenu)

  const toggle = () => {
    if(showMenu === 'block'){
      
      setShowMenu('none')
    } else {
      setShowMenu('block')
    }
    console.log('toggling')
  }
    
  return (
    <div>
        <div className="menu">
            <ul>
                <div className="ham" onClick={toggle}>

                {/* <a href=""> */}
                  <i class="fa-solid fa-bars"></i>
                  {/* </a> */}
                </div>
                <div className='icons' style={{display:`${showMenu}`}} >

                <a href="#home"><i className="fa-solid fa-house"></i></a>
                {/* <i class="fa-solid fa-rectangle-history"></i> */}
                <a href='#skill'><i className="fa-solid fa-address-card"></i></a>
                <a href="#projects"><i className="fa-solid fa-book"></i></a>
                <a href="#contact"><i className="fa-solid fa-location-dot"></i></a>
                </div>
            </ul>
        
        </div>
    </div>
  )
}

export default Navbar