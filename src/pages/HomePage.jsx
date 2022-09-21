import React from "react";
import MainLayout from "../ui/layouts/MainLayout";
import Hero from "../ui/components/Hero";
import Claims from "../ui/components/Claims";
import Values from "../ui/components/Values";
import About from "../ui/components/About";
import Contact from "../ui/components/Contact";
import Cta from "../ui/components/Cta";
import Quote from "../ui/components/Quote";
import Services from "../ui/components/Services";
import MapBlock from "../ui/components/MapBlock";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Claims />
      <Cta />
      <Services />
      <About />
      <Cta skin="dark" clearButton />
      <Values />
      <MapBlock />
      <Quote
        text="quote:text"
        author="Elías Alonso Gómez-Cornejo"
        position="quote:elias-position"
      />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
