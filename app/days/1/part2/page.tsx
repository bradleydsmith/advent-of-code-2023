import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Solver from "./solver";
import Link from "next/link";

export default function Day2() {
  return (
    <main className="flex flex-col space-y-3 p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Day 1 - Part 2
      </h1>
      <p>
        Your calculation isn't quite right. It looks like some of the digits are
        actually spelled out with letters: one, two, three, four, five, six,
        seven, eight, and nine also count as valid "digits".
      </p>
      <p>
        Equipped with this new information, you now need to find the real first
        and last digit on each line. For example:
      </p>
      <p>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          two1nine
          <br />
          eightwothree
          <br />
          abcone2threexyz
          <br />
          xtwone3four
          <br />
          4nineeightseven2
          <br />
          zoneight234
          <br />
          7pqrstsixteen
        </code>
      </p>
      <p>
        In this example, the calibration values are 29, 83, 13, 24, 42, 14, and
        76. Adding these together produces 281.
      </p>
      <p>What is the sum of all of the calibration values?</p>
      <Solver />
      <div className="pt-4 space-x-2">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/days/1">
          <Button>Go to Part 1</Button>
        </Link>
      </div>
    </main>
  );
}
