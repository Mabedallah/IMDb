"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const router = useRouter();
    const [serach, setSearch] = useState();
    function handleSubmit(e){
        e.preventDefault();
        if(!serach) return;
        router.push(`/search/${serach}`);

    }
  return (
    <form className="flex max-w-6xl mx-auto justify-between items-center px-5" onSubmit={handleSubmit}>
        <input 
        value={serach}
        onChange={(e)=>setSearch(e.target.value)}
        type="text" placeholder="Search Keywords..." 
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"/>
        <button disabled={!serach} type="submit"
        className="text-amber-400 disabled:text-gray-400">Search</button>
    </form>
  )
}
