import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="cards-container"> 
      <article className="card" tabIndex="0">
        <img className="card-image" src="https://i.imgur.com/Da3fU7U.png?1" alt="img" />
        <p className="card-title" tabIndex="0">JobHob</p>
        <p className="card-sub-title" tabIndex="0">React App / Mobile 💻📱</p>
        <p className="card-description" tabIndex="0">Add & Update List of Jobs</p>
        <a type="button" href="https://github.com/andreancardona/job-app" className="card-button">REPO | DEMO</a>
      </article>
      <article className="card" tabIndex="0">
        <img className="card-image" src="https://i.imgur.com/fQooFLV.jpg" alt="img" />
        <p className="card-title" tabIndex="0">Chipper</p>
        <p className="card-sub-title" tabIndex="0">React Native App 📱</p>
        <p className="card-description" tabIndex="0">On a mission to help you pay off your student loans</p>
        <a type="button" href="https://www.youtube.com/watch?v=9LvK3uLQfuU&t=630s" className="card-button">DEMO</a>
      </article>
      <article className="card" tabIndex="0">
        <img className="card-image" src="https://i.imgur.com/yHXSdzM.png" alt="img" />
        <p className="card-title" tabIndex="0">Carbon React Tutorial </p>
        <p className="card-sub-title" tabIndex="0">Carbon React App 💻</p>
        <p className="card-description" tabIndex="0">5 step tutorial on building a Carbon React App</p>
        <a type="button" href="https://www.youtube.com/watch?v=Ky2xoc5UwA4&t=431s" className="card-button">DEMO</a>
      </article>
      <article className="card">
        <img className="card-image" src="https://i.imgur.com/y91xfoo.png" alt="img" />
        <p className="card-title" tabIndex="0">Carbon Gatsby Theme</p>
        <p className="card-sub-title" tabIndex="0">Gatsby Theme Site 💻</p>
        <p className="card-description" tabIndex="0">⚡10 min lightning talk</p>
        <a type="button" href="https://gatsby-theme-carbon.now.sh/getting-started#watch-a-newbie-try-it-out" className="card-button">DEMO</a>
      </article>
      <article className="card">
        <img className="card-image" src="https://i.imgur.com/dWPmFP9.png" alt="img" />
        <p className="card-title" tabIndex="0">BoozeHounds</p>
        <p className="card-sub-title" tabIndex="0">Ruby on Rails Web App 💻</p>
        <p className="card-description" tabIndex="0">Search for your nearest NYC corner store. Add a favorite to your list, make comments & leave a review.</p>
        <a type="button" href="https://www.youtube.com/watch?v=WAUHEWFr1uE&t=2s" className="card-button">DEMO</a>
      </article>
    </section>
  )
}

export default Projects;
