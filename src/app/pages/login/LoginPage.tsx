"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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

export default function LoginPage() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  function onSubmit(data: {
    email: string;
    password: string;
    remember: boolean;
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
              <h1 className="text-2xl text-center font-bold ">
                Welcome to Code Biruni
              </h1>
              <p className="mt-2 text-sm text-center">
                Stay with us and enjoy your life in the digital world
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
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Link
                          href="/pages/forget-password"
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="••••••••"
                          type="password"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Remember Me Checkbox */}
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="cursor-pointer">
                          Remember me
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full h-11">
                Sign In
              </Button>
            </form>
          </Form>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-600">
            Don`t have an account?{" "}
            <Link
              href="/pages/signup"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>
          <SocialAuth />
        </div>
      </div>
    </div>
  );
}
