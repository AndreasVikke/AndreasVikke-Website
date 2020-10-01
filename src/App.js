import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './style/App.css';
import { Navbar, Nav } from 'react-bootstrap';
// import LoginForm from './login/LoginForm';
import OnePage from './onepage'
import URLSettings from './settings';
import WebPFallback from './modules/webp';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path={URLSettings.getURL("Home")}> <OnePage /> </Route>
          {/* <Route path={URLSettings.getURL("AV-CMS")}> <LoginForm /> </Route> */}
          <Route path={URLSettings.getURL("NoMatch")}> <NoMatch /> </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

const Header = () => {
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: navBackground ? '#f9f9fa' : '#fff'}}>
      <Navbar.Brand href="#profile">
        <WebPFallback className="logo" src="/images/av-icon.webp" fallback="/images/av-icon.png" alt="Andreas Vikke" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={URLSettings.getURL("Home") + "#portfolio"}>Portfolio</Nav.Link>
          <Nav.Link href={URLSettings.getURL("Home") + "#hobbies"}>Hobbies</Nav.Link>
          <Nav.Link href={URLSettings.getURL("Home") + "#getintouch"}>Get in Touch</Nav.Link>
          <Nav.Link href={URLSettings.getURL("Home") + "#github"}>Github</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const Footer = () => {
  return (
    <footer>
        <span>© Copyright 2020 <NavLink exact to={URLSettings.getURL("Home")}>Andreas Vikke</NavLink></span>
        <span>test</span>
    </footer>
  )
}

const NoMatch = () => <div>404 Not Found</div>

export default App;