/*
 * Date: Wed Sep 25 2024
 * File: index.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { $, component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ScrollReveal from "scrollreveal";
import About from "~/components/about";
import Contact from "~/components/contact";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Hero from "~/components/hero";
import Skills from "~/components/skills";
import Work from "~/components/work";

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    $(() => {
      ScrollReveal().reveal(".reveal");
    }),
  );

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Timo Riegebauer | Webentwickler Portfolio aus Graz",
  meta: [
    {
      name: "description",
      content:
        "Entdecken Sie das Portfolio von Timo Riegebauer, einem Full-Stack-Webentwickler aus Graz, der auf skalierbare, visuell ansprechende und leistungsstarke Websites spezialisiert ist. Mit modernen Frontend-Frameworks und robusten Backend-Lösungen setze ich Ihre digitale Vision um.",
    },
  ],
};
