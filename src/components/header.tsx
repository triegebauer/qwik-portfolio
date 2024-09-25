/*
 * Date: Wed Sep 25 2024
 * File: header.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$, useSignal } from "@builder.io/qwik";
import LogoImage from "/public/images/logo.svg?jsx";
import Navbar from "./navbar";

export default component$(() => {
  const isNavOpen = useSignal(false);

  return (
    <header class="fixed left-0 top-0 z-40 flex h-20 w-full items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div class="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr,3fr,1fr] md:px-6">
        <h1>
          <a href="/" class="logo">
            <LogoImage width={40} height={40} />
          </a>
        </h1>

        <div class="relative md:justify-self-center">
          <button
            onClick$={() => (isNavOpen.value = !isNavOpen.value)}
            class="menu-btn md:hidden"
          >
            <span class="material-symbols-rounded">
              {isNavOpen.value ? "close" : "menu"}
            </span>
          </button>

          <Navbar isOpen={isNavOpen.value} />
        </div>

        <a
          href="#contact"
          class="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
});
