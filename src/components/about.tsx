/*
 * Date: Wed Sep 25 2024
 * File: about.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$ } from "@builder.io/qwik";
import LogoImage from "/public/images/logo.svg?jsx";

export default component$(() => {
  const aboutItems = [
    {
      label: "Projects done",
      value: 0,
    },
    {
      label: "Years of experience",
      value: 7,
    },
  ] as {
    label: string;
    value: number;
  }[];

  return (
    <section id="about" class="section">
      <div class="container">
        <div class="rounded-2xl bg-zinc-800/50 p-7 md:p-12">
          <p class="mb-4 text-zinc-300 md:mb-8 md:max-w-[60ch] md:text-xl">
            Welcome! I&apos;m Timo, a professional web developer passionate
            about creating visually striking and highly functional websites. By
            blending creativity with technical expertise, I turn your vision
            into a digital masterpiece that shines in both design and
            performance.
          </p>

          <div class="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, value }, key) => (
              <div key={key}>
                <div class="flex items-center md:mb-2">
                  <span class="text-2xl font-semibold md:text-4xl">
                    {value}
                  </span>
                  <span class="font-semibold text-sky-400 md:text-3xl">+</span>
                </div>

                <p class="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <LogoImage
              width={30}
              height={30}
              class="ml-auto md:h-[40px] md:w-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
