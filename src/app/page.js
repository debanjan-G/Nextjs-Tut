import Link from "next/link";
import Header from "../components/header";


export default function Home() {
  console.log("This is the Home Page");
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
     <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href="/about" className="my-4 border border-white p-4 rounded-md text-center">About Us</Link>
      </div >
  );
}
