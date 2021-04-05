import React from 'react';
import Projects from '../components/Projects'
import '../styles/Home.css';

const Home = () => {
  return (
    <section>
      <h1 className="header-title" tabIndex="0">
        Hi && Hola.
      </h1>
      <section className="sub-headers-container">
        <p className="sub-header-name" tabIndex="0">
          I'm Andrea.
        </p>
        <p className="sub-header-description" tabIndex="0">
          Frontend Developer learning to write better code every day || at least trying to.
        </p>
        <p className="sub-header-location">
          <a className="location" href="https://www.carbondesignsystem.com/">📍 @ IBM's Carbon Design System</a>
        </p>
        <section className="tiles-container">
          <a className="tile" href="https://github.com/andreancardona?tab=repositories">
            <img className="tile-logo" src="https://i.imgur.com/IKyn2TR.png" alt="github" />
            <p className="tile-text">Code</p>
          </a>
          <a className="tile" href="https://github.com/andreancardona/talks-presentations/blob/main/README.md">
            <img className="tile-logo" src="https://i.imgur.com/IKyn2TR.png" alt="github" />
            <p className="tile-text">Talks</p>
          </a>
          <a className="tile" href="https://medium.com/@oh-hey-dre">
            <img className="tile-logo" src="https://i.imgur.com/p9Yzq61.png" alt="github" />
            <p className="tile-text">Blog</p>
          </a>
          <a className="tile" href="https://www.linkedin.com/in/andrea-cardona-b647594b/">
            <img className="tile-logo" src="https://i.imgur.com/MX9mFpT.png" alt="github" />
            <p className="tile-text">LinkedIn</p>
          </a>
          <a className="tile" href="https://techqueria.org/">
            <img className="tile-logo" src="https://i.imgur.com/6TOxxpo.png" alt="github" />
            <p className="tile-text">Techqueria</p>
          </a>
          <a className="tile" href="https://github.com/andreancardona?tab=repositories">
            <img className="tile-logo" src="https://i.imgur.com/JWa8WWp.png" alt="github" />
            <p className="tile-text">Twitter</p>
          </a>
        </section>
        <p className="sub-header-projects" tabIndex="0">
          Some fun projects I've worked on 👩🏽‍💻 
        </p>
        <Projects />
        {/* <div><CopyText /></div> */}
        <footer className="copyright-footer">Little hands typing fast | © 2021 Andrea Cardona </footer>
      </section>
    </section>
  )
}

export default Home; 