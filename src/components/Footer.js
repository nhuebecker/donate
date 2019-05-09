/** @jsx jsx */
import jsx from '../jsx'
import React from 'react'
import theme from '../theme'

const Footer = () => {
  return (
    <footer borderTop='1px solid' borderColor='black-20' px={4} py={4} display='flex'>
        <div>
          <a color='black' py={1} fontWeight={700} href='https://tachyons.io' title='Tachyons' >Tachyons</a><br/>
          <a color='black' py={1} fontWeight={700} href='https://tachyons.io/docs' title='Tachyons Docs' >Docs</a><br/>
          <a color='black' py={1} fontWeight={700} href='https://github.com/tachyons-css/generator' title='Tachyons' >Generator</a><br />
        </div>
        <div ml='auto' width={144}>
          <a color='black' py={1} fontWeight={700} href='https://opencollective.com/tachyons' title='Tachyons' >Open Collective</a><br />
          <a color='black' py={1} fontWeight={700} href='https://github.com/tachyons-css' title='Tachyons' >GitHub</a><br />
          <a color='black' py={1} fontWeight={700} href='https://twitter.com/tachyons_css' title='Tachyons' >Twitter</a>
        </div>
    </footer>
  )
}

export default Footer