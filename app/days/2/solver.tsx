"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Solver() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  function process() {
    const MAX_RED_CUBES = 12;
    const MAX_GREEN_CUBES = 13;
    const MAX_BLUE_CUBRES = 14;

    let total = 0;

    let games = input.split("\n");

    games.forEach((game) => {
      let impossible = false;
      const gameSplit = game.split(": ");
      const sanitizedGame = gameSplit[1];
      const subGames = sanitizedGame.split("; ");
      subGames.forEach((subGame) => {
        const cubes = subGame.split(", ");

        cubes.forEach((cube) => {
          const cubeSplit = cube.split(" ");
          const cubeCount = parseInt(cubeSplit[0]);
          const cubeType = cubeSplit[1];

          if (cubeType == "red" && cubeCount > MAX_RED_CUBES) {
            impossible = true;
          } else if (cubeType == "green" && cubeCount > MAX_GREEN_CUBES) {
            impossible = true;
          } else if (cubeType == "blue" && cubeCount > MAX_BLUE_CUBRES) {
            impossible = true;
          }
        });
      });

      if (!impossible) {
        const gameId = parseInt(gameSplit[0].replace("Game ", ""));
        total = total + gameId;
      }
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
