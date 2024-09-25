/*
 * Date: Wed Sep 25 2024
 * File: primary-button.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$ } from "@builder.io/qwik";

interface PrimaryButtonProps {
  label: string;
  href?: string;
  target?: string;
  download?: string;
  icon?: string;
}

export default component$((props: PrimaryButtonProps) => {
  if (props.href) {
    return (
      <a
        href={props.href}
        target={props.target ?? "_self"}
        download={props.download ?? ""}
        class="btn btn-primary"
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
      <button class="btn btn-primary">
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
