import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Solver from "./solver";
import Link from "next/link";

export default function Day2Part2() {
  return (
    <main className="flex flex-col space-y-3 p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Day 2 - Cube Conundrum
      </h1>
      <h2 className="pt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
        Part 2
      </h2>
      <p>
        The Elf says they've stopped producing snow because they aren't getting
        any water! He isn't sure why the water stopped; however, he can show you
        how to get to the water source to check it out for yourself. It's just
        up ahead!
      </p>
      <p>
        As you continue your walk, the Elf poses a second question: in each game
        you played, what is the fewest number of cubes of each color that could
        have been in the bag to make the game possible?
      </p>
      <p>Again consider the example games from earlier:</p>
      <p>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
          <br />
          Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
          <br />
          Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1
          red
          <br />
          Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14
          red
          <br />
          Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
        </code>
      </p>
      <p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            In game 1, the game could have been played with as few as 4 red, 2
            green, and 6 blue cubes. If any color had even one fewer cube, the
            game would have been impossible.
          </li>
          <li>
            Game 2 could have been played with a minimum of 1 red, 3 green, and
            4 blue cubes.
          </li>
          <li>
            Game 3 must have been played with at least 20 red, 13 green, and 6
            blue cubes.
          </li>
          <li>Game 4 required at least 14 red, 3 green, and 15 blue cubes.</li>
          <li>
            Game 5 needed no fewer than 6 red, 3 green, and 2 blue cubes in the
            bag.
          </li>
        </ul>
      </p>
      <p>
        The power of a set of cubes is equal to the numbers of red, green, and
        blue cubes multiplied together. The power of the minimum set of cubes in
        game 1 is 48. In games 2-5 it was 12, 1560, 630, and 36, respectively.
        Adding up these five powers produces the sum 2286.
      </p>
      <p>
        For each game, find the minimum set of cubes that must have been
        present. What is the sum of the power of these sets?
      </p>
      <Solver />
      <div className="pt-4 space-x-2">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/days/2">
          <Button>Go to Part 1</Button>
        </Link>
      </div>
    </main>
  );
}
