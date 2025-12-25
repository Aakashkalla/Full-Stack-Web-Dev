import Image from "next/image";
import axios from "axios";
import Link from "next/link";

export default async function Home() {
  

  return (
    <>
    <div className="text-lg w-screen h-screen flex items-center justify-center">
    <div>
    Todo Application
    <br></br>
    <div className="flex gap-2">
    <button className="border-2"><Link href={"/signup"}>Signup</Link></button>
    <button className="border-2"><Link href='/signin'>Signin</Link></button>
    </div>
    </div>
    </div>
    </>
    
  );
}
