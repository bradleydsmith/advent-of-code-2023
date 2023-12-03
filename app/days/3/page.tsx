import { Button } from "@/components/ui/button";
import Solver from "./solver";
import Link from "next/link";

export default function Day3() {
  return (
    <main className="flex flex-col space-y-3 p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-500 to-green-500 inline-block text-transparent bg-clip-text">
        Day 3: Gear Ratios
      </h1>
      <h2 className="pt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center text-slate-300">
        Part 1
      </h2>
      <p>
        You and the Elf eventually reach a gondola lift station; he says the
        gondola lift will take you up to the water source, but this is as far as
        he can bring you. You go inside.
      </p>
      <p>
        It doesn't take long to find the gondolas, but there seems to be a
        problem: they're not moving.
      </p>
      <p>"Aaah!"</p>
      <p>
        You turn around to see a slightly-greasy Elf with a wrench and a look of
        surprise. "Sorry, I wasn't expecting anyone! The gondola lift isn't
        working right now; it'll still be a while before I can fix it." You
        offer to help.
      </p>
      <p>
        The engineer explains that an engine part seems to be missing from the
        engine, but nobody can figure out which one. If you can add up all the
        part numbers in the engine schematic, it should be easy to work out
        which part is missing.
      </p>
      <p>
        The engine schematic (your puzzle input) consists of a visual
        representation of the engine. There are lots of numbers and symbols you
        don't really understand, but apparently any number adjacent to a symbol,
        even diagonally, is a "part number" and should be included in your sum.
        (Periods (.) do not count as a symbol.)
      </p>
      <p>Here is an example engine schematic:</p>
      <p>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          467..114..
          <br />
          ...*......
          <br />
          ..35..633.
          <br />
          ......#...
          <br />
          617*......
          <br />
          .....+.58.
          <br />
          ..592.....
          <br />
          ......755.
          <br />
          ...$.*....
          <br />
          .664.598..
        </code>
      </p>
      <p>
        In this schematic, two numbers are not part numbers because they are not
        adjacent to a symbol: 114 (top right) and 58 (middle right). Every other
        number is adjacent to a symbol and so is a part number; their sum is
        4361.
      </p>
      <p>
        Of course, the actual engine schematic is much larger. What is the sum
        of all of the part numbers in the engine schematic?
      </p>
      <Solver />
      <div className="pt-4 space-x-2">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/days/3/part2">
          <Button>Go to Part 2</Button>
        </Link>
      </div>
    </main>
  );
}
