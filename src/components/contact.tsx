/*
 * Date: Wed Sep 25 2024
 * File: contact.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const contactItems = [
    {
      link: "https://github.com/triegebauer/",
      alt: "Github",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
    },
    {
      link: "https://www.linkedin.com/in/timo-riegebauer-31775732b/",
      alt: "LinkedIn",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    },
    {
      link: "https://www.instagram.com/timo.riegebauer/",
      alt: "Instagram",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    },
  ] as {
    link: string;
    alt: string;
    icon: string;
  }[];

  return (
    <section id="contact" class="section">
      <div class="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div class="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 class="reveal headline-2 lg:max-w-[12ch]">
            Contact me for collaboration
          </h2>
          <p class="reveal mb-8 mt-3 max-w-[50ch] text-zinc-400 lg:max-w-[30ch]">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>

          <div class="reveal mt-auto flex items-center gap-2">
            {contactItems.map(({ link, icon }, key) => (
              <a
                key={key}
                href={link}
                target="_blank"
                dangerouslySetInnerHTML={icon}
                class="grid h-12 w-12 place-items-center rounded-lg ring-2 ring-inset ring-zinc-50/5 transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
              ></a>
            ))}
          </div>
        </div>

        <form class="xl:pl-10 2xl:pl-20">
          <div class="md:grid md:grid-cols-2 md:items-center md:gap-2">
            <div class="reveal mb-4">
              <label for="name" class="label">
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="John Doe"
                class="text-field"
                required
              />
            </div>
            <div class="reveal mb-4">
              <label for="email" class="label">
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="john.doe@example.com"
                class="text-field"
                required
              />
            </div>
          </div>

          <div class="reveal mb-4">
            <label for="message" class="label">
              Message
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              class="text-field max-h-80 min-h-32 resize-y"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="reveal btn btn-primary w-full justify-center [&]:max-w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
});
