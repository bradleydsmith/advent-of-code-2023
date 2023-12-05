"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Solver() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  function process() {
    let total = 0;

    const lines = input
      .replace(/Card[^\S\r\n]+[\d]+:[^\S\r\n]+/g, "")
      .replace(/[^\S\r\n]+/g, " ")
      .split("\n");

    lines.forEach((line) => {
      const [winningNumbersString, cardNumbersString] = line.split(" | ");
      const winningNumbers = winningNumbersString
        .split(" ")
        .map((n) => parseInt(n));
      const cardNumbers = cardNumbersString.split(" ").map((n) => parseInt(n));

      const winningCardNumbers = cardNumbers
        .filter((cn) => winningNumbers.includes(cn))
        .filter((x, i, a) => a.indexOf(x) == i);

      let subTotal = 0;

      winningCardNumbers.forEach((wn) => {
        if (subTotal == 0) {
          subTotal = 1;
        } else {
          subTotal = subTotal * 2;
        }
      });

      total = total + subTotal;
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
