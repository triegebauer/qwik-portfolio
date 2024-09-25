/*
 * Date: Wed Sep 25 2024
 * File: project-card.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$ } from "@builder.io/qwik";

interface ProjectCardProps {
  title: string;
  tags: string[];
  projectLink: string;
  imageSrc: string;
}

export default component$((props: ProjectCardProps) => {
  return (
    <div class="reveal relative rounded-2xl bg-zinc-800 p-4 ring-1 ring-inset ring-zinc-50/5 transition-colors hover:bg-zinc-700/50 active:bg-zinc-700/60">
      <figure class="img-box mb-4 aspect-square rounded-lg">
        <img
          src={props.imageSrc}
          width={0}
          height={0}
          alt={props.title}
          loading="lazy"
          class="img-cover"
        />
      </figure>

      <div class="flex items-center justify-between gap-4">
        <div>
          <h3 class="title-1 mb-3">{props.title}</h3>

          <div class="flex flex-wrap items-center gap-2">
            {props.tags.map((label, key) => (
              <span
                key={key}
                class="grid h-8 items-center rounded-lg bg-zinc-50/5 px-3 text-sm text-zinc-400"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div class="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-400 text-zinc-950">
          <span class="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      <a href={props.projectLink} target="_blank" class="absolute inset-0"></a>
    </div>
  );
});
