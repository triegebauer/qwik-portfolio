/*
 * Date: Wed Sep 25 2024
 * File: outline-button.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$ } from "@builder.io/qwik";

interface OutlineButtonProps {
  label: string;
  href?: string;
  target?: string;
  icon?: string;
}

export default component$((props: OutlineButtonProps) => {
  if (props.href) {
    return (
      <a
        href={props.href}
        target={props.target ?? "_self"}
        class="btn btn-outline"
      >
        {props.label}

        {props.icon ? (
          <span class="material-symbols-rounded" aria-hidden="true">
            {props.icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button class="btn btn-outline">
        {props.label}

        {props.icon ? (
          <span class="material-symbols-rounded" aria-hidden="true">
            {props.icon}
          </span>
        ) : undefined}
      </button>
    );
  }
});
