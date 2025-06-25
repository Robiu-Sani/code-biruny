import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CommunityBanner() {
  return (
    <div className="w-full py-12 md:py-20  relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-xl overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-5xl font-bold text-gray-900">
              Join Our Community
            </CardTitle>
            <CardDescription className="mt-4 text-lg md:text-xl text-gray-600">
              Connect with passionate developers, share ideas, and grow together
              at Code Biruny!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Link href={`/pages/login`}>
              <Button className="bg-zinc-600 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
                Join Now
              </Button>
            </Link>

            <Link href={`/pages/company/about`}>
              <Button
                variant="outline"
                className="border-zinc-600 text-zinc-600 hover:bg-zinc-50 px-6 py-3 rounded-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
