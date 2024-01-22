import Image from "next/image";
import { Inter } from "next/font/google";
import { Currency } from "@/components/selection/Currency";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <div>
      {/* <Login/> */}
      <Currency/>
   </div>
   </>
  )
}
