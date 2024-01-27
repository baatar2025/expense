
import { Login } from "@/components/log/Login";
import { CategoryNames } from "@/components/records/CategoryNames";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <> 
     {/* <Login/> */}
     <CategoryNames/>
   </>
  )
}
