// import { Button } from "@/components/ui/button";
import HomeAbout from "./home/HomeAbout";
import SecendSection from "./home/SecendSection";
import Global from "./setup/Global";

export default function Home() {
  return (
    <div className="w-full">
      {/* <Button>click</Button> */}
      <Global />
      <SecendSection />
      <HomeAbout />
    </div>
  );
}
