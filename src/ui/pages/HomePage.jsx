import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Cta from "../components/Cta";
import Quote from "../components/Quote";
import Services from "../components/Services";
import AuctaBrick from "../components/AuctaBrick";
import Approach from "../components/Approach";
import Startups from "../components/Startups";

const HomePage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <MainLayout>
      <Hero />
      <Services />
      <AuctaBrick />
      <Approach />
      <Cta
        skin="dark"
        title="cta:title"
        buttonText="action:lets-make-it-happen"
      />
      <Startups />
      <Cta skin="dark" title="cta2:title" buttonText="cta2:action" reversed />
      <Team />
      <Cta skin="dark" title="cta3:title" buttonText="cta3:action" />
      <Quote
        text="quote:text"
        author="Daniel Seiler"
        position="quote:daniel-position"
      />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
