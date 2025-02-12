import Header from "@/components/header";
import Intro from "@/components/intro";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <main className="mx-auto h-full max-w-xl flex-col items items-center justify-center py-7 px-5">
        <Header />
        <Intro />
      </main>
    </div>
  );
}
