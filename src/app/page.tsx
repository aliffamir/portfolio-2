"use client";

import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <main className="items mx-auto flex h-full max-w-xl flex-col items-center justify-center gap-10 px-5 py-7">
        <Header />
        <Intro />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
