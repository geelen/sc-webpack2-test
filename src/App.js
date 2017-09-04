import React, { Component } from 'react'
import logo from './logo.svg'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Intro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <Intro className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    )
  }
}

export default App
