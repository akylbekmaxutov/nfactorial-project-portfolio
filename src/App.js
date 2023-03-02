import './App.css';
import Avatar from './imgs/avatar.jpeg';
import Logos from './imgs/logos.png';
import Project1 from './imgs/project1.png';
import Project2 from './imgs/project2.png';

function App() {
  return (
    <div className="App">
      <div className="App-card">
        <div className="App-line"></div>
        <header className="App-header" id="header">
          <div className="App-header__MyName">
            <a href="#main">Akylbek Maxutov</a>
          </div>
          <ul className="App-header__NavInfo">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </header>
        <div className="App-line"></div>
        <main className="App-main" id="main">
          <h1 className="App-main__Me">
            Hi, I'm Akylbek,
            I build things for the web both for client side and server side.
          </h1>
          <p className="App-main__WhoAmI">I'm software developer, engineer, data scientist, 
            project manager, and a very good person in general.</p>
          <a href="https://github.com/akylbekmaxutov/certificates/blob/main/AkylbekMaxutov_RESUME.pdf">  
            <button className="App-main__Button">Check out my CV</button>
          </a>
        </main>
        <div className="App-line"></div>
        <div className="App-about" id="about">
          <div className="App-about__Info">
            <h1 className="App-about__Me">About me</h1>
            <p className="App-about__ExtraInfo">
              I'm Full-stack Developer
            </p>
            <div className="App-about__BulletInfo">
              <div className="App-about__BulletInfo-Col">
                <ul className="App-about__BulletInfo-Col-elems">
                  <li>HTML5 && CSS3</li>
                  <li>JavaScript</li>
                  <li>React && Hooks && Router</li>
                  <li>Bootstrap && Material UI</li>
                </ul>
              </div>
              <div className="App-about__BulletInfo-Col">
                <ul className="App-about__BulletInfo-Col-elems">
                  <li>NodeJs && ExpressJs</li>
                  <li>MongoDB && PostgreSQL</li>
                  <li>Docker && Kubernetes</li>
                  <li>Git && AWS</li>
                </ul>
              </div>
            </div>
            <div className="App-about__Logos">
              <img src={Logos} alt=""/>
            </div>
          </div>
          <div className="App-about__Avatar">
            <img src={Avatar} alt="" />
          </div>
        </div>
        <div className="App-line"></div>
        <div className="App-experience" id="experience">
          <h1>Experience</h1>
          <div className="App-experience__Info">
            <p className="App-experience__Info-years">
              2022 -
              2023</p>
            <div className="App-experience__Detailed">
              <p className="App-experience__Info-role">
                Information Management Specialist 🖥️
              </p>
              <p className="App-experience__Info-City">Astana, Kazakhstan</p>
              <p className="App-experience__Info-Obligations">
                • Integration of AI based solutions into the business needs of Big IT Companies in Kazakhstan.<br/>
                • Testing the AI solutions for their performance before launch.<br/>
                • Cooperation with Project Management, Development, and Design teams.
              </p>
            </div>
          </div>
          <div className="App-experience__Info">
            <p className="App-experience__Info-years">
              2022 -
              2023</p>
            <div className="App-experience__Detailed">
              <p className="App-experience__Info-role">
                Topic Author in the Golang Track 🖋️
              </p>
              <p className="App-experience__Info-City">Remote, the Internet</p>
              <p className="App-experience__Info-Obligations">
                • Creation of Teaching Content about Golang Programming Language.<br/>
                • Participation in the development of Golang Track in the ‘JetBrains Academy.’<br/>
                • Created Two topics: ‘Best Practices in GO’ and ‘Type Switching in GO’
              </p>
            </div>
          </div>
          <div className="App-experience__Info">
            <p className="App-experience__Info-years">
              2021 -
              2021</p>
            <div className="App-experience__Detailed">
              <p className="App-experience__Info-role">
                Data Scientist (Intern) 📚
              </p>
              <p className="App-experience__Info-City">Astana, Kazakhstan</p>
              <p className="App-experience__Info-Obligations">
                • Became one of 50 people selected for an internship through a competition consisting of 4 rounds 
                  with a total number of applications from 6000 participants.<br/>
                • Attended lectures from CU ‘Samruk-Kazyna’ with a total of 69 academic hours dedicated to IT.<br/>
                • Became one of the 8 MVPs in the hackathon from ‘Samruk-Kazyna’ ‘Summer Hack 2021’ with a 
                  total number of 50 participants.
              </p>
            </div>
          </div>
        </div>
        <div className="App-line"></div>
        <div className="App-projects" id="projects">
          <h1>Projects I’ve Worked On</h1>
          <div className="App-projects__Gallery">
            <div className="App-projects__Gallery1">
              <div className="App-projects__Gallery-img1">
                <img className="App-projects__Gallery-image1" src={Project1} alt=""/>
              </div>
              <div className="App-projects__Gallery-desc1">
                <p className="App-projects__Gallery-desc-title">Media as Medium project 📰</p>
                <p className="App-projects__Gallery-desc-tools">Tools: HTML, CSS, JavaScript, DOM, Async Await, API</p>
                <p className="App-projects__Gallery-desc-desc">The nicely organized News web-site with parcing and fetching functionality from the New York Times API</p>
              </div>
            </div>
            <div className="App-projects__Gallery2">
              <div className="App-projects__Gallery-desc2">
                <p className="App-projects__Gallery-desc-title">To-Do project ✌</p>
                <p className="App-projects__Gallery-desc-tools">Tools: HTML, CSS, JavaScript, React, Hooks</p>
                <p className="App-projects__Gallery-desc-desc">The Single Page To-Do app for the daily tasks with the Add, Delete, and Navigate functionalities</p>
              </div>
              <div className="App-projects__Gallery-img2">
                <img className="App-projects__Gallery-image2" src={Project2} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="App-line"></div>
        <div className="App-contacts" id="contacts">
          <h1>Say Hello 👋</h1>
          <p className="App-main__WhoAmI">I'm software developer, engineer, data scientist, 
            project manager, and a very good person in general.</p>
          <a href="mailto:maxutov.akylbek@gmail.com">  
            <button className="App-main__Button">Send me Email</button>
          </a>
        </div>
        <div className="App-line"></div>
        <footer className="App-footer">
          <p className="App-footer__made">Made with ❤️ at nFactorial in 2022.</p>
          <p className="App-footer__credits">Credits: icons from Icons8.</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
