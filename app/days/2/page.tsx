import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Solver from "./solver";
import Link from "next/link";

export default function Day2() {
  return (
    <main className="flex flex-col space-y-3 p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-500 to-green-500 inline-block text-transparent bg-clip-text">
        Day 2: Cube Conundrum
      </h1>
      <h2 className="pt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center text-slate-300">
        Part 1
      </h2>
      <p>
        You're launched high into the atmosphere! The apex of your trajectory
        just barely reaches the surface of a large island floating in the sky.
        You gently land in a fluffy pile of leaves. It's quite cold, but you
        don't see much snow. An Elf runs over to greet you.
      </p>
      <p>
        The Elf explains that you've arrived at Snow Island and apologizes for
        the lack of snow. He'll be happy to explain the situation, but it's a
        bit of a walk, so you have some time. They don't get many visitors up
        here; would you like to play a game in the meantime?
      </p>
      <p>
        As you walk, the Elf shows you a small bag and some cubes which are
        either red, green, or blue. Each time you play this game, he will hide a
        secret number of cubes of each color in the bag, and your goal is to
        figure out information about the number of cubes.
      </p>
      <p>
        To get information, once a bag has been loaded with cubes, the Elf will
        reach into the bag, grab a handful of random cubes, show them to you,
        and then put them back in the bag. He'll do this a few times per game.
      </p>
      <p>
        You play several games and record the information from each game (your
        puzzle input). Each game is listed with its ID number (like the 11 in
        Game 11: ...) followed by a semicolon-separated list of subsets of cubes
        that were revealed from the bag (like 3 red, 5 green, 4 blue).
      </p>
      <p>For example, the record of a few games might look like this:</p>
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
        In game 1, three sets of cubes are revealed from the bag (and then put
        back again). The first set is 3 blue cubes and 4 red cubes; the second
        set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is
        only 2 green cubes.
      </p>
      <p>
        The Elf would first like to know which games would have been possible if
        the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?
      </p>
      <p>
        In the example above, games 1, 2, and 5 would have been possible if the
        bag had been loaded with that configuration. However, game 3 would have
        been impossible because at one point the Elf showed you 20 red cubes at
        once; similarly, game 4 would also have been impossible because the Elf
        showed you 15 blue cubes at once. If you add up the IDs of the games
        that would have been possible, you get 8.
      </p>
      <p>
        Determine which games would have been possible if the bag had been
        loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What
        is the sum of the IDs of those games?
      </p>
      <Solver />
      <div className="pt-4 space-x-2">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/days/2/part2">
          <Button>Go to Part 2</Button>
        </Link>
      </div>
    </main>
  );
}
