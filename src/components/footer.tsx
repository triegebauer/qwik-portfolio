/*
 * Date: Wed Sep 25 2024
 * File: footer.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$ } from "@builder.io/qwik";
import PrimaryButton from "./primary-button";
import LogoImage from "/public/images/logo.svg?jsx";

export default component$(() => {
  const sitemapItems = [
    {
      title: "Home",
      link: "#home",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Work",
      link: "#work",
    },
    {
      title: "Contact me",
      link: "#contact",
    },
  ] as {
    title: string;
    link: string;
  }[];

  const socialItems = [
    {
      title: "GitHub",
      link: "https://github.com/triegebauer/",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/timo-riegebauer-31775732b/",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/timo.riegebauer/",
    },
  ] as {
    title: string;
    link: string;
  }[];

  return (
    <footer class="section">
      <div class="container">
        <div class="lg:grid lg:grid-cols-2">
          <div class="mb-10">
            <h2 class="reveal headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>

            <PrimaryButton
              label="Start project"
              href="mailto:timo@triegebauer.at"
              icon="chevron_right"
            />
          </div>

          <div class="grid grid-cols-2 gap-4 lg:pl-20">
            <div class="reveal">
              <p class="mb-2">Sitemap</p>

              <ul>
                {sitemapItems.map(({ title, link }, key) => (
                  <li key={key}>
                    <a
                      href={link}
                      class="block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div class="reveal">
              <p class="mb-2">Socials</p>

              <ul>
                {socialItems.map(({ title, link }, key) => (
                  <li key={key}>
                    <a
                      href={link}
                      target="_blank"
                      class="block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div class="reveal mb-8 flex items-center justify-between pt-10">
          <a href="">
            <LogoImage width={40} height={40} />
          </a>

          <p class="text-sm text-zinc-500">
            &copy; 2024 <span class="text-zinc-200">Timo Riegebauer</span>
          </p>
        </div>
      </div>
    </footer>
  );
});
