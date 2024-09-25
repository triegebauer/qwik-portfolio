/*
 * Date: Wed Sep 25 2024
 * File: skill-card.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$ } from "@builder.io/qwik";

interface SkillCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default component$((props: SkillCardProps) => {
  return (
    <div class="reveal group flex items-center gap-3 rounded-2xl p-3 ring-2 ring-inset ring-zinc-50/10 transition-colors hover:bg-zinc-800">
      <figure class="grid h-12 w-12 items-center overflow-hidden rounded-lg bg-zinc-700/50 p-2 transition-colors group-hover:bg-zinc-900">
        <img
          src={props.imageSrc}
          width={32}
          height={32}
          alt={props.title}
          class="rounded-md"
        />
      </figure>

      <div>
        <h3>{props.title}</h3>

        <p class="text-sm text-zinc-400">{props.description}</p>
      </div>
    </div>
  );
});
