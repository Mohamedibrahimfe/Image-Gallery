import Search from "./Search";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="grid grid-cols-1 sm:gap-10 lg:grid-cols-2  place-items-center p-4  px-32 bg-black text-white ">
      <Link href="/">
        <h1 className="-ml-7 text-1xl mb-2 md:text-2xl font-bold ">
          Image Gallery App
        </h1>
      </Link>
      <Search />
    </nav>
  );
}
