"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Solver() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  function process() {
    let lines = input.split("\n");
    let total = 0;

    lines.forEach((line) => {
      const strippedLine = line.replace(/[^0-9]/g, "");
      const joinedNumber =
        strippedLine[0] + strippedLine[strippedLine.length - 1];
      const numericalJoinedNumber = parseInt(joinedNumber);

      total = total + numericalJoinedNumber;
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
