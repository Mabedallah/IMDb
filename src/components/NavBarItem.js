"use client"
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function NavBarItem({title,param}) {
    const searchParam = useSearchParams();
    const genere = searchParam.get('genere');
  return (
    <div>
        <Link href={`/?genere=${param}`}
        className={`m-4 hover:text-amber-600 font-semibold p-2 
        ${
            genere && genere === param && 
            "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
        >
            {title}
        </Link>        
    </div>
  )
}
