import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Advent Of Code 2023
      </h1>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      </ul>
    </main>
  );
}
