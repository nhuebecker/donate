import React from 'react'
import { ThemeProvider } from "emotion-theming"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import theme from './theme'

// import pages here 
import Home from './pages/Home'
import Donate from './pages/Donate'
import Coeus from './pages/Coeus'

import Div from './elements/Div'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Div style={{ fontFamily: theme.typefaces.sansSerif }}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/donate' component={Donate} />
          <Route path='/coeus' component={Coeus} />
        </Router>
      </Div>
    </ThemeProvider>
  );
}

export default App
