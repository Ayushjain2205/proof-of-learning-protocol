import Image from "next/image";
import { Inter } from "next/font/google";
import CustomGumroadButton from "@/components/Custom/DoubleButton";
import StreakGraph from "@/components/Custom/StreakGraph";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      Hello world?
      <CustomGumroadButton />
      <StreakGraph />
    </div>
  );
}
