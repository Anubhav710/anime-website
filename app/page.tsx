import Image from "next/image";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "@/components/LoadMore";
import { fetchAnime } from "./action";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="bg-black h-screen">
      <div className="flex flex-col justify-center space-y-9 h-screen items-center">
        <h1 className="text-7xl text-white max-w-4xl  text-center">
          Welcome To Animix Anime Move website
        </h1>
        <div className="flex space-x-6">
          <Link href={"/Login"}>
            <button
              type="button"
              className="px-6 py-3 bg-green-600 rounded-xl hover:bg-green-400 duration-500 transition-colors"
            >
              Login
            </button>
          </Link>
          <Link href={"/Register"}>
            <button
              type="button"
              className="px-6 py-3 bg-green-600 rounded-xl hover:bg-green-400 duration-500 transition-colors"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
