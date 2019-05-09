/** @jsx jsx */
import jsx from '../jsx'
import React from 'react'
import theme from '../theme'

import Container from '../components/Container'
import Header from '../components/Header'

function Donate() {
  return (
    <div>
      <Header />
      <main>
        <Container pt={[4,5]} pb={[4,5]} px={4}>
          <h2 fontSize={[4,5,6]} mb={2} mt={0}>Donate!</h2>
          <h3 fontSize={[1,2,3]} lineHeight={1.25} textStyle='caps' color='black-80' mb={4}>
            Thanks for checking this out!!
          </h3>
          <div>
            <p>Any type of donation helps, be it one dollar, $500 {";)"} or even just making a post and spreading the word. Your support will make great things possible.</p>
            <p>Now to the important stuff. What you get!! If you make any donation, you will get the following:</p>
            <ul>

              <li>
                First Look Access to the Coeus Platform and Product
              </li>
              <li>
                Weekly updates on our progress during the program {'(And after if all goes well)'}
              </li>
              <li>
                ????
              </li>
            </ul>
            <p>You can donate by using either of the platforms below or, if you prefer to use something else, by sending me a text and we can figure something out!</p>
            <a href={'https://paypal.me/nhuebecker'} title="PayPal"
              bg='dark-blue' color='white' borderRadius={2} mt={2} mx={2} py={3} px={4} textStyle='none' fontSize={[1]} fontWeight={700}>
              PayPal
            </a>
            <a href='https://cash.app/$nhuebecker' title="Cash App"
              bg='green' color='white' borderRadius={2} mt={2} mx={2} py={3} px={4} textStyle='none' fontSize={[1]} fontWeight={700}>
              Cash App
            </a>
            <a href='sms://6784916062' title="Text Nik!"
              bg='dark-green' color='white' borderRadius={2} mt={2} mx={2} py={3} px={4} textStyle='none' fontSize={[1]} fontWeight={700}>
              Text Me!
            </a>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default Donate
