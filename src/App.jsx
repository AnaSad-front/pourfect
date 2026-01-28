import { Outlet } from "react-router";
import "./App.css";

import AppContainer from "./components/ui/AppContainer";

import Hero from "./components/ui/Hero";
import Logo from "./components/ui/Logo";
import Subtitle from "./components/ui/Subtitle";

import Navigation from "./components/ui/navigation/Navigation";

import Faq from "./components/ui/faq/Faq";
import FaqAccordion from "./components/ui/faq/FaqAccordion";
import SectionTitle from "./components/ui/SectionTitle";

import Footer from "./components/ui/footer/Footer";
import FooterColumn from "./components/ui/footer/FooterColumn";
import LogoSmall from "./components/ui/LogoSmall";
import SocialList from "./components/ui/footer/SocialList";
import FooterNav from "./components/ui/footer/FooterNav";
import SocialLinkedIn from "./components/ui/footer/SocialLinkedIn";
import SocialGithub from "./components/ui/footer/SocialGithub";
import SocialInstagram from "./components/ui/footer/SocialInstagram";
import FooterNavItem from "./components/ui/footer/FooterNavItem";
import Copyright from "./components/ui/footer/Copyright";

function App() {
  return (
    <>
      <AppContainer>
        <Hero>
          <Logo />
          <Subtitle subtitle="Professional calculations for perfect candles, reed diffusers and gypsum containers." />
        </Hero>
        <Navigation />
        <Outlet />
        <Faq>
          <SectionTitle title="Frequently Asked Questions" />
          <Subtitle subtitle="Everything you need to know about our calculators" />
          <FaqAccordion />
        </Faq>
      </AppContainer>
      <Footer>
        <FooterColumn>
          <LogoSmall />
          <SocialList>
            <SocialLinkedIn />
            <SocialGithub />
            <SocialInstagram />
          </SocialList>
        </FooterColumn>
        <FooterColumn>
          <FooterNav>
            <FooterNavItem to="/">Candle calculator</FooterNavItem>
            <FooterNavItem to="diffuser">
              Reed diffuser calculator
            </FooterNavItem>
            <FooterNavItem to="gypsum">Gypsum calculator</FooterNavItem>
          </FooterNav>
        </FooterColumn>
        <FooterColumn>
          <Copyright />
        </FooterColumn>
      </Footer>
    </>
  );
}

export default App;
