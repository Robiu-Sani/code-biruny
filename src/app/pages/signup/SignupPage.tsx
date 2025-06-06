"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SocialAuth from "../_SocialAuth/SocialSuth";
import { useEffect, useState } from "react";

export default function SignupPage() {
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean | null>(null);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const watchPassword = form.watch("password");
  const watchConfirmPassword = form.watch("confirmPassword");

  useEffect(() => {
    if (confirmPasswordFocused && watchConfirmPassword) {
      setPasswordsMatch(watchPassword === watchConfirmPassword);
    }
  }, [watchPassword, watchConfirmPassword, confirmPasswordFocused]);

  function onSubmit(data: {
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    console.log("Login form submitted:", data);
    // Add your login logic here
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center  sm:not-only:p-4">
      <div className="w-full max-w-md space-y-8">
        <div className=" sm:shadow-md rounded-lg sm:p-8 p-4 space-y-6 sm:border border-gray-200 dark:border-gray-700">
          <Form {...form}>
            <div className="text-center">
              <h1 className="text-3xl text-center font-bold ">Code Biruny</h1>
              <p className="mt-2 text-sm text-center">
                Stay with us and enjoy your life in the digital world!
              </p>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your@email.com"
                          type="email"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="••••••••"
                          type="password"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                      <div className="text-xs text-muted-foreground mt-1">
                        Must be at least 8 characters with 1 uppercase and 1
                        number
                      </div>
                    </FormItem>
                  )}
                />

                {/* Confirm Password Field */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="••••••••"
                          type="password"
                          {...field}
                          className={`h-11 ${
                            confirmPasswordFocused
                              ? passwordsMatch === false
                                ? "border-red-500 focus-visible:ring-red-500"
                                : passwordsMatch === true
                                ? "border-green-500 focus-visible:ring-green-500"
                                : ""
                              : ""
                          }`}
                          onFocus={() => setConfirmPasswordFocused(true)}
                          onBlur={() => setConfirmPasswordFocused(false)}
                        />
                      </FormControl>
                      <FormMessage />
                      {confirmPasswordFocused && passwordsMatch !== null && (
                        <p
                          className={`text-xs mt-1 ${
                            passwordsMatch ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {passwordsMatch
                            ? "Passwords match!"
                            : "Passwords do not match"}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full h-11">
                Sign Up
              </Button>
            </form>
          </Form>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-600">
            have an account?{" "}
            <Link
              href="/pages/login"
              className="font-medium text-primary hover:underline"
            >
              Sign In
            </Link>
          </div>
          <SocialAuth />
        </div>
      </div>
    </div>
  );
}
