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
    const isGearSymbol = character == "*";
    return [isGearSymbol, isSymbol, isNumber, isPeriod];
  }

  function process() {
    let total = 0;

    const lines = input.split("\n");
    const grid: string[][] = [];
    const gearGrid: number[][][] = [];

    lines.forEach((line, lineIdx) => {
      const characters = line.split("");
      characters.push(".");
      grid.push(characters);

      const gears: number[][] = [];
      characters.forEach(() => {
        gears.push([]);
      });
      gearGrid.push(gears);
    });

    for (let i = 0; i < lines.length; i++) {
      const line = grid[i];
      let digits = [];
      let adjacentGears: [number, number][] = [];

      for (let j = 0; j < line.length; j++) {
        const character = line[j];
        const [isGearSymbol, isSymbol, isNumber, isPeriod] =
          testCharacter(character);

        if (isNumber) {
          digits.push(character);

          // Search up
          if (i - 1 >= 0) {
            const upCharacter = grid[i - 1][j];
            const [upIsGear] = testCharacter(upCharacter);

            if (upIsGear) {
              adjacentGears.push([i - 1, j]);
            }
          }

          // Search down
          if (i + 1 < grid.length) {
            const downCharacter = grid[i + 1][j];
            const [downIsGear] = testCharacter(downCharacter);

            if (downIsGear) {
              adjacentGears.push([i + 1, j]);
            }
          }

          // Search left
          if (j - 1 >= 0) {
            const leftCharacter = grid[i][j - 1];
            const [leftIsGear] = testCharacter(leftCharacter);

            if (leftIsGear) {
              adjacentGears.push([i, j - 1]);
            }
          }

          // Search left
          if (j + 1 < line.length) {
            const rightCharacter = grid[i][j + 1];
            const [rightIsGear] = testCharacter(rightCharacter);

            if (rightIsGear) {
              adjacentGears.push([i, j + 1]);
            }
          }

          // Search up left
          if (i - 1 >= 0 && j - 1 >= 0) {
            const upLeftCharacter = grid[i - 1][j - 1];
            const [upLeftIsGear] = testCharacter(upLeftCharacter);

            if (upLeftIsGear) {
              adjacentGears.push([i - 1, j - 1]);
            }
          }

          // Search up right
          if (i - 1 >= 0 && j + 1 < line.length) {
            const upRightCharacter = grid[i - 1][j + 1];
            const [upRightIsGear] = testCharacter(upRightCharacter);

            if (upRightIsGear) {
              adjacentGears.push([i - 1, j + 1]);
            }
          }

          // Search down left
          if (i + 1 < grid.length && j - 1 >= 0) {
            const downLeftCharacter = grid[i + 1][j - 1];
            const [downLeftIsGear] = testCharacter(downLeftCharacter);

            if (downLeftIsGear) {
              adjacentGears.push([i + 1, j - 1]);
            }
          }

          // Search down right
          if (i + 1 < grid.length && j + 1 < line.length) {
            const downRightCharacter = grid[i + 1][j + 1];
            const [downRightIsGear] = testCharacter(downRightCharacter);

            if (downRightIsGear) {
              adjacentGears.push([i + 1, j + 1]);
            }
          }
        } else if (isPeriod || isSymbol) {
          if (digits.length > 0 && adjacentGears.length > 0) {
            const num = parseInt(digits.join(""));
            const accountedGears: [number, number][] = [];
            adjacentGears.forEach((gear) => {
              const [y, x] = gear;
              const accountedIdx = accountedGears.findIndex(
                (gear: [number, number]) => gear[0] == y && gear[1] == x
              );
              if (accountedIdx == -1) {
                gearGrid[y][x].push(num);
                accountedGears.push(gear);
              }
            });
          }
          digits = [];
          adjacentGears = [];
        }
      }
    }

    const flatGearGrid = gearGrid.flat().filter((gears) => gears.length == 2);
    flatGearGrid.forEach((gears) => {
      let gearsTotal = 1;
      gears.forEach((gear) => {
        gearsTotal = gearsTotal * gear;
      });

      total = total + gearsTotal;
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
