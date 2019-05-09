/** @jsx jsx */
import jsx from '../jsx'
import React from 'react'
import theme from '../theme'

import Container from '../components/Container'

function Home() {
  return (
    <div>
      {/* <header px={4} py={2} borderBottom='1px solid' borderColor='black-20' display='flex' alignItems='center'>
        <div maxWidth='6rem'>
          <a display='block' href='https://tachyons.io'><Logo color='rgba(0,0,0,.7)' /></a>
        </div>
      </header> */}
      <main>
        <Container pt={[3,4]} pb={[3,4]} px={4}>
          <h2 fontSize={[4,5,6]} mb={4} mt={0}>Hey Friends, Family, or Random Internet Person, I'm Nikolas 😎</h2>
          <h3 fontSize={[1,2,3]} lineHeight={1.25} textStyle='caps' color='black-80' mb={4}>
            <span display={['block', 'inline']}> Your friendly neighborhood Student + </span>
            <span display={['block', 'inline']}>Developer + </span>
            <span display={['block', 'inline']}>Entreprenuer</span>
          </h3>
          <div fontSize={[1,2]}>
            <p>This summer I have been invited to attend <a fontWeight={500} color='black' href='https://www.quarterzero.com/' title="QuarterZero">QuarterZero</a>. I was selected to be one of 24 founders that will be building their products this summer! It is an absolute honor to be accepted, and I am hoping to do so much while I'm there. I will be working on a long time dream of mine, called <a fontWeight={500} color='black' href='/coeus' title="Coeus">Coeus</a>. If you want to learn more about what it is, click the name! But to keep it short we are hoping to change the way students pursue their dreams and live their passions, and in doing so change the face of education!</p>

            <p>To make this dream a reality, I need to raise $5,000. So I would be honored if you would choose to help make this possible. Click the donate button below and you will get all the details on how you can help, and what you get in return! Thanks for all your love and support!</p>
          </div>
          <a href='/donate' title="Styles and documentation"
             bg='blue' color='white' borderRadius={2} mt={2} py={3} px={4} textStyle='none' fontSize={[1]} fontWeight={700}>
            Donate!
          </a>
        </Container>
      </main>
    </div>
  );
}

export default Home
