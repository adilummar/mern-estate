import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between max-w-6xl m-auto items-center p-3">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-500">Real</span>
              <span className="text-slate-700">estate</span>
            </h1>
          </Link>

          <form className="bg-slate-100 rounded-lg p-3 flex items-center">
            <input
              type="text"
              placeholder="search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-500" />
          </form>

          <ul className="flex gap-4">
            <Link to={"/"}>
              <li className="hidden sm:inline hover:underline">Home</li>
            </Link>
            <Link to={"/about"}>
              <li className="hidden sm:inline hover:underline">About</li>
            </Link>
            <Link to={"signin"}>
              <li className="hover:underline">Sign in</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
