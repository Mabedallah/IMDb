import Link from "next/link";
import Menuitem from "./Menuitem";
import { AiFillHome } from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs"

export default function Header() {
  return (
    <div className="flex justify-between max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex ">
        <Menuitem Title="HOME" Address="/" Icon={AiFillHome}/>
        <Menuitem Title="AOUT" Address="/about" Icon={BsFillInfoCircleFill}/>
      </div>
      <div className="">
        <Link href="/">
            <h2 className="text-2xl"><span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb</span>
            <span className="text-xl hidden sm:inline">Clone</span></h2>
        </Link>
      </div>
    </div>
  )
}
