import { Route, Routes, Navigate } from 'react-router-dom';

import Container from '../../components/Container';
import Navigation from '../../components/Navigation';
import LayoutSection from '../../views/LayoutSection';
import Hero from '../../components/Hero';

import styles from './PreviewPage.module.scss';
import Portfolio from '../../components/Portfolio/Portfolio';
import Weddings from '../../components/Weddings/Weddings';
import Birthdays from '../../components/Birthdays/Birthdays';
// import UserCards from '../../components/UserCards';
// import RegisterUserForm from '../../forms/RegisterUserForm';

const pageViews = [
  {
    component: Hero,
    idSection: 'hero',
  },
  {
    component: Portfolio,
    idSection: 'portfolio',
  },
  // {
  //   component: RegisterUserForm,
  //   idSection: "registerUserForm",
  // },
];

export default function PreviewPage() {
  return (
    <>
      <LayoutSection element="header" classNameProps={styles.header}>
        <Container>
          <Navigation />
        </Container>
      </LayoutSection>
      <main>
        <LayoutSection id="hero">
          <Container>
            <Hero />
          </Container>
        </LayoutSection>

        <Routes>
          <Route
            path="/"
            element={
              <LayoutSection id="portfolio">
                <Container>
                  <Portfolio />
                </Container>
              </LayoutSection>
            }
          />
          <Route
            path="/portfolio/weddings"
            element={
              <LayoutSection>
                <Container>
                  <Weddings />
                </Container>
              </LayoutSection>
            }
          />
          <Route
            path="/portfolio/birthdays"
            element={
              <LayoutSection>
                <Container>
                  <Birthdays />
                </Container>
              </LayoutSection>
            }
          />
          {/* <Route path="/#portfolio/weddings" element={<Weddings />}/> */}
          {/* <Route path="/" element={<Portfolio />}/> */}
        </Routes>
      </main>
    </>
  );
}

// {pageViews.map(view => (
//   <LayoutSection key={view.idSection} id={view.idSection}>
//     <Container>
//       <view.component />
//     </Container>
//   </LayoutSection>
// ))}
