"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

interface GameState {
  dinoY: number;
  dinoVelocity: number;
  cacti: { x: number }[];
  score: number;
  highScore: number;
  isGameOver: boolean;
}

const NotFound: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const [gameState, setGameState] = useState<GameState>({
    dinoY: 0,
    dinoVelocity: 0,
    cacti: [],
    score: 0,
    highScore: 0,
    isGameOver: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load high score from localStorage
    const savedHighScore = localStorage.getItem("dinoHighScore");
    if (savedHighScore) {
      setGameState((prev) => ({
        ...prev,
        highScore: parseInt(savedHighScore),
      }));
    }

    const dinoImg = new Image();
    dinoImg.src = "/dino.png"; // Placeholder path, replace with your image
    const cactusImg = new Image();
    cactusImg.src = "/cactus.png"; // Placeholder path, replace with your image

    let animationFrameId: number;
    const gravity = 0.5;
    const jumpPower = -12;
    const cactusSpeed = 5;
    const groundY = canvas.height - 50;

    const handleJump = () => {
      if (gameState.dinoY === 0 && !gameState.isGameOver) {
        setGameState((prev) => ({ ...prev, dinoVelocity: jumpPower }));
      }
    };

    const restartGame = () => {
      setGameState((prev) => ({
        ...prev,
        dinoY: 0,
        dinoVelocity: 0,
        cacti: [],
        score: 0,
        isGameOver: false,
      }));
    };

    const spawnCactus = () => {
      setGameState((prev) => ({
        ...prev,
        cacti: [...prev.cacti, { x: canvas.width }],
      }));
    };

    const gameLoop = () => {
      setGameState((prev) => {
        if (prev.isGameOver) return prev;

        // Update dino position
        const newDinoY = prev.dinoY + prev.dinoVelocity;
        const newVelocity = prev.dinoVelocity + gravity;
        let newCacti = prev.cacti.map((cactus) => ({
          x: cactus.x - cactusSpeed,
        }));
        newCacti = newCacti.filter((cactus) => cactus.x > -20);

        // Collision detection
        let isGameOver: boolean = prev.isGameOver;
        newCacti.forEach((cactus) => {
          if (cactus.x < 70 && cactus.x > 20 && newDinoY > -20) {
            isGameOver = true;
            if (prev.score > prev.highScore) {
              localStorage.setItem("dinoHighScore", prev.score.toString());
            }
          }
        });

        // Update score
        const newScore = prev.score + 1;

        // Spawn new cactus
        if (Math.random() < 0.02 && newCacti.length < 3) {
          spawnCactus();
        }

        return {
          ...prev,
          dinoY: newDinoY > 0 ? newDinoY : 0,
          dinoVelocity: newDinoY > 0 ? newVelocity : 0,
          cacti: newCacti,
          score: newScore,
          isGameOver,
          highScore: Math.max(prev.highScore, newScore),
        };
      });

      // Draw game
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = "#000";
      ctx.fillRect(0, groundY, canvas.width, 2);

      // Draw dino
      ctx.drawImage(dinoImg, 50, groundY - 30 - gameState.dinoY, 30, 30);

      // Draw cacti
      gameState.cacti.forEach((cactus) => {
        ctx.drawImage(cactusImg, cactus.x, groundY - 20, 20, 20);
      });

      // Draw score
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${gameState.score}`, 10, 30);
      ctx.fillText(`High Score: ${gameState.highScore}`, 10, 60);

      // Draw game over
      if (gameState.isGameOver) {
        ctx.font = "30px Arial";
        ctx.fillText(
          "Game Over! Press Space to Restart",
          canvas.width / 2 - 150,
          canvas.height / 2
        );
      }

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    // Start game loop
    animationFrameId = requestAnimationFrame(gameLoop);

    // Event listeners
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        if (gameState.isGameOver) {
          restartGame();
        } else {
          handleJump();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [gameState]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        404 - Page Not Found | Code Biruny
      </h1>
      <p className="mb-4">
        Oops! Looks like you`re lost in Code Biruny. Play this game while you`re
        here!
      </p>
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="border border-black mb-4"
      />
      <p className="mb-4">
        Press <strong>Space</strong> to jump or restart
      </p>
      <div className="flex gap-4">
        <Button onClick={() => router.back()} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={() => router.push("/")}>
          <Home className="mr-2 h-4 w-4" /> Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
