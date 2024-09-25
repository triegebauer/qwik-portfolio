/*
 * Date: Wed Sep 25 2024
 * File: hero.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$ } from "@builder.io/qwik";
import AvatarImage from "/public/images/avatar.jpg?jsx";
import HeroBannerImage from "/public/images/hero-banner.png?jsx";
import PrimaryButton from "./primary-button";

export default component$(() => {
  return (
    <section id="home" class="pt-28 lg:pt-36">
      <div class="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div class="flex items-center gap-3">
            <figure class="img-box h-9 w-9 rounded-lg">
              <AvatarImage
                class="img-cover h-[40px] w-[40px] blur-sm"
                alt="Timo Riegebauer Portrait"
              />
            </figure>

            <div class="flex items-center gap-1.5 text-sm tracking-wide text-zinc-400">
              <span class="relative h-2 w-2 rounded-full bg-emerald-400">
                <span class="absolute inset-0 animate-ping rounded-full bg-emerald-400"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 class="headline-1 lg:max-w-15ch] mb-8 mt-5 max-w-[15ch] sm:max-w-[20ch] lg:mb-10">
            Crafting Scalable, Future-Ready Websites with Modern Technologies
          </h2>

          <div class="flex items-center gap-3">
            <PrimaryButton
              label="Download CV (English)"
              href="/docs/cv_english.pdf"
              download="English_CV_Timo_Riegebauer"
              icon="download"
            />
            <PrimaryButton
              label="Download CV (German)"
              href="/docs/cv_german.pdf"
              download="German_CV_Timo_Riegebauer"
              icon="download"
            />
          </div>
        </div>

        <div class="hidden lg:block">
          <figure class="ml-auto w-full max-w-[480px] overflow-hidden rounded-[60px] bg-gradient-to-t from-sky-400 via-sky-400/40 via-25% to-65%">
            <HeroBannerImage class="w-full blur-md" alt="Timo Riegebauer" />
          </figure>
        </div>
      </div>
    </section>
  );
});
