 /** @jsx jsx */
import jsx from '../jsx'
import React from 'react'
import theme from '../theme'

import Logo from './Logo'

const Header = () => {
  return (
    <header px={4} py={3} borderBottom='1px solid' borderColor='black-20' display='flex' alignItems='center'>
        <div maxWidth='6rem'>
            <a display='block' href='/'><Logo color='rgba(0,0,0,.7)' /></a>
        </div>
    </header>
  )
}

export default Header     