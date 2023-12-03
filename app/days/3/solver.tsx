"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Solver() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  function testCharacter(character: string) {
    const isNumber = !isNaN(parseInt(character));
    const isPeriod = character == ".";
    const isSymbol = !(isNumber || isPeriod);
    return [isSymbol, isNumber, isPeriod];
  }

  function process() {
    let total = 0;

    const lines = input.split("\n");
    const grid: string[][] = [];

    lines.forEach((line, lineIdx) => {
      const characters = line.split("");
      characters.push(".");
      grid.push(characters);
    });

    for (let i = 0; i < lines.length; i++) {
      const line = grid[i];
      let digits = [];
      let isSymbolAdjuscent = false;

      for (let j = 0; j < line.length; j++) {
        const character = line[j];
        const [isSymbol, isNumber, isPeriod] = testCharacter(character);

        if (isNumber) {
          digits.push(character);

          // Search up
          if (i - 1 >= 0) {
            const upCharacter = grid[i - 1][j];
            const [upIsSymbol] = testCharacter(upCharacter);

            if (upIsSymbol) {
              isSymbolAdjuscent = true;
            }
          }

          // Search down
          if (i + 1 < grid.length) {
            const downCharacter = grid[i + 1][j];
            const [downIsSymbol] = testCharacter(downCharacter);

            if (downIsSymbol) {
              isSymbolAdjuscent = true;
            }
          }

          // Search left
          if (j - 1 >= 0) {
            const leftCharacter = grid[i][j - 1];
            const [leftIsSymbol] = testCharacter(leftCharacter);

            if (leftIsSymbol) {
              isSymbolAdjuscent = true;
            }
          }

          // Search left
          if (j + 1 < line.length) {
            const rightCharacter = grid[i][j + 1];
            const [rightIsSymbol] = testCharacter(rightCharacter);

            if (rightIsSymbol) {
              isSymbolAdjuscent = true;
            }
          }

          // Search up left
          if (i - 1 >= 0 && j - 1 >= 0) {
            const upLeftCharacter = grid[i - 1][j - 1];
            const [upLeftIsSymbol] = testCharacter(upLeftCharacter);

            if (upLeftIsSymbol) {
              isSymbolAdjuscent = true;
            }
          }

          // Search up right
          if (i - 1 >= 0 && j + 1 < line.length) {
            const upRightCharacter = grid[i - 1][j + 1];
            const [upRightIsSymbol] = testCharacter(upRightCharacter);

            if (upRightIsSymbol) {
              isSymbolAdjuscent = true;
            }
          }

          // Search down left
          if (i + 1 < grid.length && j - 1 >= 0) {
            const downLeftCharacter = grid[i + 1][j - 1];
            const [downLeftIsSymbol] = testCharacter(downLeftCharacter);

            if (downLeftIsSymbol) {
              isSymbolAdjuscent = true;
            }
          }

          // Search down right
          if (i + 1 < grid.length && j + 1 < line.length) {
            const downRightCharacter = grid[i + 1][j + 1];
            const [downRightIsSymbol] = testCharacter(downRightCharacter);

            if (downRightIsSymbol) {
              isSymbolAdjuscent = true;
            }
          }
        } else if (isPeriod || isSymbol) {
          if (digits.length > 0 && isSymbolAdjuscent) {
            const num = parseInt(digits.join(""));
            total = total + num;
          }
          digits = [];
          isSymbolAdjuscent = false;
        }
      }
    }

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
