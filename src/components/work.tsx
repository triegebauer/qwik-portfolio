/*
 * Date: Wed Sep 25 2024
 * File: work.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$ } from "@builder.io/qwik";
import ProjectCard from "./project-card";

export default component$(() => {
  const workItems = [] as {
    title: string;
    tags: string[];
    projectLink: string;
    imageSrc: string;
  }[];

  return (
    <section id="work" class="section">
      <div class="container">
        <h2 class="reveal headline-2 mb-8">My portfolio highlights</h2>

        <div class="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
          {workItems.length !== 0 ? (
            workItems.map(({ title, tags, projectLink, imageSrc }, key) => (
              <ProjectCard
                key={key}
                title={title}
                tags={tags}
                projectLink={projectLink}
                imageSrc={imageSrc}
              />
            ))
          ) : (
            <p class="text-zinc-400">Coming Soon!</p>
          )}
        </div>
      </div>
    </section>
  );
});
