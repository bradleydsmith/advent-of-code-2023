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
        Part 2
      </h2>
      <p>
        The engineer finds the missing part and installs it in the engine! As
        the engine springs to life, you jump in the closest gondola, finally
        ready to ascend to the water source.
      </p>
      <p>
        You don't seem to be going very fast, though. Maybe something is still
        wrong? Fortunately, the gondola has a phone labeled "help", so you pick
        it up and the engineer answers.
      </p>
      <p>
        Before you can explain the situation, she suggests that you look out the
        window. There stands the engineer, holding a phone in one hand and
        waving with the other. You're going so slowly that you haven't even left
        the station. You exit the gondola.
      </p>
      <p>
        The missing part wasn't the only issue - one of the gears in the engine
        is wrong. A gear is any * symbol that is adjacent to exactly two part
        numbers. Its gear ratio is the result of multiplying those two numbers
        together.
      </p>
      <p>
        This time, you need to find the gear ratio of every gear and add them
        all up so that the engineer can figure out which gear needs to be
        replaced.
      </p>
      <p>Consider the same engine schematic again:</p>
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
        In this schematic, there are two gears. The first is in the top left; it
        has part numbers 467 and 35, so its gear ratio is 16345. The second gear
        is in the lower right; its gear ratio is 451490. (The * adjacent to 617
        is not a gear because it is only adjacent to one part number.) Adding up
        all of the gear ratios produces 467835.
      </p>
      <p>What is the sum of all of the gear ratios in your engine schematic?</p>
      <Solver />
      <div className="pt-4 space-x-2">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/days/3">
          <Button>Go to Part 1</Button>
        </Link>
      </div>
    </main>
  );
}
