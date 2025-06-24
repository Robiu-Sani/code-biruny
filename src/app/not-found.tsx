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
    dinoImg.src = "/dino.png"; // Ensure this path is correct
    const cactusImg = new Image();
    cactusImg.src = "/cactus.png"; // Ensure this path is correct

    let animationFrameId: number;
    const gravity = 0.5;
    const jumpPower = -12;
    const cactusSpeed = 5;
    const groundY = canvas.height - 50;
    const dinoHeight = 30; // Height of the dinosaur image

    let isJumpTriggered = false; // Flag to control jump initiation

    const handleJump = () => {
      if (gameState.dinoY <= 0 && !gameState.isGameOver && !isJumpTriggered) {
        isJumpTriggered = true;
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
      isJumpTriggered = false; // Reset jump flag on restart
    };

    const spawnCactus = () => {
      setGameState((prev) => ({
        ...prev,
        cacti: [...prev.cacti, { x: canvas.width }],
      }));
    };

    const gameLoop = () => {
      setGameState((prev) => {
        if (prev.isGameOver && !gameState.isGameOver) return prev; // Only update if not game over or restarting

        let newDinoY = prev.dinoY;
        let newVelocity = prev.dinoVelocity;

        // Apply gravity and jump only if triggered or in mid-jump
        if (isJumpTriggered || prev.dinoVelocity !== 0) {
          newDinoY = prev.dinoY + prev.dinoVelocity;
          newVelocity = prev.dinoVelocity + gravity;

          // Ensure dino lands on ground
          const dinoBottom = groundY - dinoHeight + newDinoY;
          if (dinoBottom >= groundY) {
            newDinoY = 0; // Reset to ground level
            newVelocity = 0; // Stop falling
            if (isJumpTriggered) isJumpTriggered = false; // Reset jump flag when landing
          }
        }

        let newCacti = prev.cacti.map((cactus) => ({
          x: cactus.x - (prev.isGameOver ? 0 : cactusSpeed),
        }));
        newCacti = newCacti.filter((cactus) => cactus.x > -20);

        // Collision detection
        let isGameOver = prev.isGameOver;
        if (!isGameOver) {
          newCacti.forEach((cactus) => {
            if (cactus.x < 70 && cactus.x > 20 && newDinoY > -20) {
              isGameOver = true;
              if (prev.score > prev.highScore) {
                localStorage.setItem("dinoHighScore", prev.score.toString());
              }
            }
          });
        }

        // Update score
        const newScore = prev.isGameOver ? prev.score : prev.score + 1;

        // Spawn new cactus only if not game over
        if (!prev.isGameOver && Math.random() < 0.02 && newCacti.length < 3) {
          spawnCactus();
        }

        return {
          ...prev,
          dinoY: newDinoY,
          dinoVelocity: newVelocity,
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

      // Draw dino (only if image is loaded)
      if (dinoImg.complete) {
        ctx.drawImage(
          dinoImg,
          50,
          groundY - dinoHeight + gameState.dinoY,
          30,
          dinoHeight
        );
      }

      // Draw cacti (only if image is loaded)
      if (cactusImg.complete) {
        gameState.cacti.forEach((cactus) => {
          ctx.drawImage(cactusImg, cactus.x, groundY - 20, 20, 20);
        });
      }

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

    // Wait for images to load before starting the game loop
    const startGame = () => {
      if (dinoImg.complete && cactusImg.complete) {
        animationFrameId = requestAnimationFrame(gameLoop);
      } else {
        dinoImg.onload = () => {
          if (cactusImg.complete) startGame();
        };
        cactusImg.onload = () => {
          if (dinoImg.complete) startGame();
        };
      }
    };
    startGame();

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

  const handleMobileJump = () => {
    if (gameState.dinoY <= 0 && !gameState.isGameOver) {
      setGameState((prev) => ({ ...prev, dinoVelocity: -12 }));
    }
  };

  return (
    <div className="flex fixed top-0 left-0 z-[9999999999] w-full bg-white flex-col items-center justify-center min-h-screen">
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
        className="border border-gray-500 rounded-md mb-4"
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
        <Button onClick={handleMobileJump} className="bg-blue-500 text-white">
          Jump
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
