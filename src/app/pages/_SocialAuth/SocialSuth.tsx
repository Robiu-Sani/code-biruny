"use client";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function SocialAuth() {
  // const handleGoogleLogin = () => {
  //   console.log("Google login clicked");
  //   // Add your Google auth logic here
  // };

  // const handleGithubLogin = () => {
  //   console.log("GitHub login clicked");
  //   // Add your GitHub auth logic here
  // };

  // const handleTwitterLogin = () => {
  //   console.log("Twitter login clicked");
  //   // Add your Twitter auth logic here
  // };

  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="flex w-full justify-between items-center space-x-2">
        <Button
          variant="outline"
          type="button"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/dashboard/user",
            })
          }
          className="flex w-1/3 items-center gap-2"
        >
          <FaGoogle className="h-4 w-4" />
          <span>Google</span>
        </Button>

        <Button
          variant="outline"
          type="button"
          onClick={() =>
            signIn("github", {
              callbackUrl: "/dashboard/user",
            })
          }
          className="flex w-1/3 items-center gap-2"
        >
          <FaGithub className="h-4 w-4" />
          <span>GitHub</span>
        </Button>

        <Button
          variant="outline"
          type="button"
          onClick={() =>
            signIn("twitter", {
              callbackUrl: "/dashboard/user",
            })
          }
          className="flex w-1/3 items-center gap-2"
        >
          <FaTwitter className="h-4 w-4 text-blue-400" />
          <span>Twitter</span>
        </Button>
      </div>
    </div>
  );
}
