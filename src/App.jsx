import React from 'react';
import { screenWithContext, darkModeContext, HeroContentContext, SkillsContentContext, HobbyCategoriesContentContext, HobbiesIMGContentContext } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import './css/style.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Hobbies from './Components/Hobbies';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import Loading from './Components/Loading';

let HeroContent;
let SkillsContent;
let HobbyCategoriesContent;
let HobbiesIMGContent;

export default function App() {
  const apiPath = 'https://portfolio-api.up.railway.app/api/portfolio';

  const [windowWidth, setWindowWith] = React.useState(window.innerWidth);
  const [darkMode, setDarkMode] = React.useState(window.matchMedia('(prefers-color-scheme: dark)'));
  const [APIAnswer, setAPIAnswer] = React.useState(false);

  let appPadding = windowWidth > 850 ? '67.5px 0 0 0' : '67.5px 0 0 0';
  let mainStyle = {
    padding: appPadding,
  };

  window.addEventListener('resize', () => {
    setTimeout(() => {
      setWindowWith(window.innerWidth);
    }, 250);
  });
  React.useEffect(() => {
    async function fetchData() {
      HeroContent = await fetch(apiPath + '/Hero')
        .then((response) => {
          return response.json();
        })
        .then((jsonList) => {
          return jsonList[0];
        });
      SkillsContent = await fetch(apiPath + '/Skills')
        .then((response) => {
          return response.json();
        })
        .then((jsonList) => {
          return jsonList;
        });
      HobbyCategoriesContent = await fetch(apiPath + '/HobbyCategories')
        .then((response) => {
          return response.json();
        })
        .then((jsonList) => {
          return jsonList;
        });
      HobbiesIMGContent = await fetch(apiPath + '/HobbiesIMG')
        .then((response) => {
          return response.json();
        })
        .then((jsonList) => {
          return jsonList;
        });
      if (HeroContent && SkillsContent && HobbyCategoriesContent && HobbiesIMGContent) {
        setAPIAnswer(true);
      } else {
        console.log('Failed to get data from API');
      }
    }
    fetchData();
  }, []);

  return APIAnswer ? (
    <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <screenWithContext.Provider value={{ windowWidth }}>
        <HeroContentContext.Provider value={HeroContent}>
          <SkillsContentContext.Provider value={SkillsContent}>
            <HobbyCategoriesContentContext.Provider value={HobbyCategoriesContent}>
              <HobbiesIMGContentContext.Provider value={HobbiesIMGContent}>
                <NavBar />
                <Container className={'main m-0' + (darkMode && ' bg-dark')} style={mainStyle} fluid>
                  <Hero />
                  <Skills />
                  <Hobbies />
                  <ContactForm />
                  <Footer />
                </Container>
              </HobbiesIMGContentContext.Provider>
            </HobbyCategoriesContentContext.Provider>
          </SkillsContentContext.Provider>
        </HeroContentContext.Provider>
      </screenWithContext.Provider>
    </darkModeContext.Provider>
  ) : (
    <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Loading />
    </darkModeContext.Provider>
  );
}
