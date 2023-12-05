import { Button } from "@/components/ui/button";
import Solver from "./solver";
import Link from "next/link";

export default function Day4Part2() {
  return (
    <main className="flex flex-col space-y-3 p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-500 to-green-500 inline-block text-transparent bg-clip-text">
        Day 4: Scratchcards
      </h1>
      <h2 className="pt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center text-slate-300">
        Part 2
      </h2>
      <p>
        Just as you're about to report your findings to the Elf, one of you
        realizes that the rules have actually been printed on the back of every
        card this whole time.
      </p>
      <p>
        There's no such thing as "points". Instead, scratchcards only cause you
        to win more scratchcards equal to the number of winning numbers you
        have.
      </p>
      <p>
        Copies of scratchcards are scored like normal scratchcards and have the
        same card number as the card they copied. So, if you win a copy of card
        10 and it has 5 matching numbers, it would then win a copy of the same
        cards that the original card 10 won: cards 11, 12, 13, 14, and 15. This
        process repeats until none of the copies cause you to win any more
        cards. (Cards will never make you copy a card past the end of the
        table.)
      </p>
      <p>This time, the above example goes differently:</p>
      <p>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          Card 1: 41 48 83 86 17 | 83 86 6 31 17 9 48 53
          <br />
          Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
          <br />
          Card 3: 1 21 53 59 44 | 69 82 63 72 16 21 14 1
          <br />
          Card 4: 41 92 73 84 69 | 59 84 76 51 58 5 54 83
          <br />
          Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
          <br />
          Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
        </code>
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          Card 1 has four matching numbers, so you win one copy each of the next
          four cards: cards 2, 3, 4, and 5.
        </li>
        <li>
          Your original card 2 has two matching numbers, so you win one copy
          each of cards 3 and 4.
        </li>
        <li>Your copy of card 2 also wins one copy each of cards 3 and 4.</li>
        <li>
          Your four instances of card 3 (one original and three copies) have two
          matching numbers, so you win four copies each of cards 4 and 5.
        </li>
        <li>
          Your eight instances of card 4 (one original and seven copies) have
          one matching number, so you win eight copies of card 5.
        </li>
        <li>
          Your fourteen instances of card 5 (one original and thirteen copies)
          have no matching numbers and win no more cards.
        </li>
        <li>
          Your one instance of card 6 (one original) has no matching numbers and
          wins no more cards.
        </li>
      </ul>
      <p>
        Once all of the originals and copies have been processed, you end up
        with 1 instance of card 1, 2 instances of card 2, 4 instances of card 3,
        8 instances of card 4, 14 instances of card 5, and 1 instance of card 6.
        In total, this example pile of scratchcards causes you to ultimately
        have 30 scratchcards!
      </p>
      <p>
        Process all of the original and copied scratchcards until no more
        scratchcards are won. Including the original set of scratchcards, how
        many total scratchcards do you end up with?
      </p>
      <Solver />
      <div className="pt-4 space-x-2">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
        <Link href="/days/4">
          <Button>Go to Part 1</Button>
        </Link>
      </div>
    </main>
  );
}
