import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Advent Of Code 2023
      </h1>
      <h2 className="pt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Solving the Advent of Code 2023 puzzles with Typescript and NextJS
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Source available on GitHub:
        <br />
        <a
          className="hover:underline"
          href="https://github.com/bradleydsmith/advent-of-code-2023"
        >
          https://github.com/bradleydsmith/advent-of-code-2023
        </a>
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <Link className="hover:underline" href="/days/1">
            Day 1
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/days/2">
            Day 2
          </Link>
        </li>
      </ul>
    </main>
  );
}
