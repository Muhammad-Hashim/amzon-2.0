// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2 text-sm   flex justify-start">
      <div className="flex space-x-3 text-white">
        <Link className="hover:text-gray-300" href="/">
          All
        </Link>
        <Link className="hover:text-gray-300" href="/">
          Today's Deals
        </Link>
        <Link className="hover:text-gray-300" href="/">
          Buy Again
        </Link>
        <Link SellclassName="hover:text-gray-300" href="/">
          Gift Cards
        </Link>
        <Link className="hover:text-gray-300" href="/">
          Customer Service
        </Link>
        <Link className="hover:text-gray-300" href="/">
          Muhammad's Amazon.com
        </Link>
        <Link className="hover:text-gray-300" href="/">
          Browsing History
        </Link>
        <Link className="hover:text-gray-300" href="/">
          Registry
        </Link>
        <Link className="hover:text-gray-300" href="/">
          Sell
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
