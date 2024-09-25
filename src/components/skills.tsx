/*
 * Date: Wed Sep 25 2024
 * File: skills.tsx
 *
 * Copyright (c) 2024 Timo Riegebauer
 */

import { component$ } from "@builder.io/qwik";
import SkillCard from "./skill-card";

export default component$(() => {
  const skillItems = [
    {
      imageSrc: "/images/skills/html.svg",
      title: "HTML 5",
      description: "",
    },
    {
      imageSrc: "/images/skills/css.svg",
      title: "CSS 3",
      description: "",
    },
    {
      imageSrc: "/images/skills/tailwindcss.svg",
      title: "TailwindCSS",
      description: "",
    },
    {
      imageSrc: "/images/skills/javascript.svg",
      title: "JavaScript",
      description: "",
    },
    {
      imageSrc: "/images/skills/typescript.svg",
      title: "TypeScript",
      description: "",
    },
    {
      imageSrc: "/images/skills/golang.svg",
      title: "Golang",
      description: "",
    },
    {
      imageSrc: "/images/skills/react.svg",
      title: "React",
      description: "",
    },
    {
      imageSrc: "/images/skills/mysql.svg",
      title: "MySQL",
      description: "",
    },
    {
      imageSrc: "/images/skills/postgresql.svg",
      title: "PostgreSQL",
      description: "",
    },
  ] as {
    imageSrc: string;
    title: string;
    description: string;
  }[];

  return (
    <section id="skills" class="section">
      <div class="container">
        <h2 class="reveal headline-2">Essential Tools I use</h2>

        <p class="reveal mb-8 mt-3 max-w-[50ch] text-zinc-400">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div class="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
          {skillItems.map(({ imageSrc, title, description }, key) => (
            <SkillCard
              key={key}
              title={title}
              description={description}
              imageSrc={imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
