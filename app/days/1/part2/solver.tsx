"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { resolve } from "path";
import { useState } from "react";

export default function Solver() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  function process() {
    let lines = input.split("\n");
    let total = 0;

    lines.forEach((line, idx) => {
      const words = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ];
      let stack: string[] = [];
      let lineSplit = line.split("");
      let numbers: number[] = [];

      // Undocumented in the problem but an overlap like sevenine is meant to produce
      // two numbers, 7 and 9

      lineSplit.forEach((character, index) => {
        if (!isNaN(parseInt(character))) {
          numbers.push(parseInt(character));
        } else {
          words.forEach((word, wordIndex) => {
            if (lineSplit.length - index >= word.length) {
              const lineSlice = lineSplit.slice(index, index + word.length);
              const joined = lineSlice.join("");
              if (joined == word) {
                numbers.push(wordIndex + 1);
              }
            }
          });
        }
      });

      const firstNumber = numbers[0].toString();
      const secondNumber = numbers[numbers.length - 1].toString();
      total = total + parseInt(`${firstNumber}${secondNumber}`);
    });

    setAnswer(total.toString());
  }

  return (
    <>
      <Textarea
        onChange={(event) => setInput(event.target.value)}
        placeholder={"Enter your puzzle input here"}
        rows={10}
      />
      <Button onClick={process}>Submit</Button>
      {answer && (
        <div>
          <Card>
            <CardContent>
              <p className="pt-2">Answer: {answer}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
