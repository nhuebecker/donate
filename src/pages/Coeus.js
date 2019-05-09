/** @jsx jsx */
import jsx from '../jsx'
import React from 'react'
import theme from '../theme'

import Container from '../components/Container'
import Header from '../components/Header'

function Coeus() {
  return (
    <div>
      <Header />
      <main>
        <Container pt={[4,5]} pb={[4,5]} px={4}>
          <h2 fontSize={[4,5,6]} mb={2} mt={0}>Coeus</h2>
          <p>Hey, you are a little early! You are more than welcome to donate, and we will let you know when we put this page up so you can learn all about Coeus.</p>
        </Container>
      </main>
    </div>
  );
}

export default Coeus
