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
        </Container>
      </main>
    </div>
  );
}

export default Coeus
