import { useState } from "react";
import { navLink } from "../data/dummy";
import { Link } from "react-scroll";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logoWB from "../asset/logoWB.png"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <div className="w-full fixed bg-invert z-1034">
      <header className="flex flex-row items-center justify-between page-center p-2 shadow-md top-0">
        <div className="w-[103px] h-[25px] text-3xl">
          <img src={logoWB} alt="" className="w-full h-full object-contain"/>
        </div>
        <ul className="hidden md:flex justify-between items-center gap-6 font-semibold">
          <li className="flex gap-x-5">
            {navLink.map((item) => {
              return (
                <Link to={item.id} key={item.id} href={item.href} className="hover:text-red-600 text-md cursor-pointer" smooth={true}>
                  {item.name}
                </Link>
              );
            })}
          </li>
        </ul>
        <button onClick={() => setNavbar(!navbar)} className="md:hidden font-bold text-xl hover:text-pink-500">
          {navbar ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </header>
      {navbar && (
        <div className="">
          <ul className="flex flex-col page-center gap-4 p-4 bg-white">
            <li className="flex gap-y-5 flex-col">
              {navLink.map((item) => {
                return (
                  <Link to={item.id} key={item.id} href={item.href} className="hover:text-pink-500 text-md border-b cursor-pointer" smooth={true}>
                    {item.name}
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
