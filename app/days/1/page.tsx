import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Solver from "./solver";
import Link from "next/link";

export default function Day1() {
  return (
    <main className="flex flex-col space-y-3 p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-500 to-green-500 inline-block text-transparent bg-clip-text">
        Day 1: Trebuchet?!
      </h1>
      <h2 className="pt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center text-slate-300">
        Part 1
      </h2>
      <p>
        Something is wrong with global snow production, and you've been selected
        to take a look. The Elves have even given you a map; on it, they've used
        stars to mark the top fifty locations that are likely to be having
        problems.
      </p>
      <p>
        You've been doing this long enough to know that to restore snow
        operations, you need to check all fifty stars by December 25th.
      </p>
      <p>
        Collect stars by solving puzzles. Two puzzles will be made available on
        each day in the Advent calendar; the second puzzle is unlocked when you
        complete the first. Each puzzle grants one star. Good luck!
      </p>
      <p>
        You try to ask why they can't just use a weather machine ("not powerful
        enough") and where they're even sending you ("the sky") and why your map
        looks mostly blank ("you sure ask a lot of questions") and hang on did
        you just say the sky ("of course, where do you think snow comes from")
        when you realize that the Elves are already loading you into a trebuchet
        ("please hold still, we need to strap you in").
      </p>
      <p>
        As they're making the final adjustments, they discover that their
        calibration document (your puzzle input) has been amended by a very
        young Elf who was apparently just excited to show off her art skills.
        Consequently, the Elves are having trouble reading the values on the
        document.
      </p>
      <p>
        The newly-improved calibration document consists of lines of text; each
        line originally contained a specific calibration value that the Elves
        now need to recover. On each line, the calibration value can be found by
        combining the first digit and the last digit (in that order) to form a
        single two-digit number.
      </p>
      <p>For example:</p>
      <p>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          1abc2
          <br />
          pqr3stu8vwx
          <br />
          a1b2c3d4e5f
          <br />
          treb7uchet
        </code>
      </p>
      <p>
        In this example, the calibration values of these four lines are 12, 38,
        15, and 77. Adding these together produces 142.
      </p>
      <p>
        Consider your entire calibration document. What is the sum of all of the
        calibration values?
      </p>
      <Solver />
      <div className="pt-4 space-x-2">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/days/1/part2">
          <Button>Go to Part 2</Button>
        </Link>
      </div>
    </main>
  );
}
