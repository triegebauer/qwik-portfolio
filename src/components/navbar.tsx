/*
 * Date: Wed Sep 25 2024
 * File: navbar.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

interface NavbarProps {
  isOpen: boolean;
}

export default component$((props: NavbarProps) => {
  const lastActiveLink = useSignal<HTMLAnchorElement>();
  const activeBox = useSignal<HTMLDivElement>();

  const navItems = [
    {
      label: "Home",
      link: "#home",
      linkClass: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      linkClass: "nav-link",
    },
    {
      label: "Skills",
      link: "#skills",
      linkClass: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      linkClass: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      linkClass: "nav-link md:hidden",
    },
  ] as {
    label: string;
    link: string;
    linkClass: string;
    ref: Signal<HTMLAnchorElement>;
  }[];

  const activateLink = $((event: PointerEvent) => {
    if (!lastActiveLink.value || !(event.target instanceof HTMLAnchorElement)) {
      return;
    }

    lastActiveLink.value.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.value = event.target;
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => lastActiveLink.value);

    if (!activeBox.value || !lastActiveLink.value) {
      return;
    }
    activeBox.value.style.top = lastActiveLink.value.offsetTop + "px";
    activeBox.value.style.left = lastActiveLink.value.offsetLeft + "px";
    activeBox.value.style.width = lastActiveLink.value.offsetWidth + "px";
    activeBox.value.style.height = lastActiveLink.value.offsetHeight + "px";
  });

  return (
    <nav class={`navbar ${props.isOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, linkClass, ref }, key) => (
        <a
          onClick$={activateLink}
          href={link}
          key={key}
          class={linkClass}
          ref={ref}
        >
          {label}
        </a>
      ))}
      <div class="active-box" ref={activeBox}></div>
    </nav>
  );
});
