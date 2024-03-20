import SubHeader from "./subheader";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline, IoBagHandleOutline } from "react-icons/io5";
import NavHeader from "./navheader";

export default function Header() {
  return (
    <header className="w-full">
      <SubHeader />
      <nav className="py-6 space-y-6">
        <div className=" w-[95%] lg:w-[70%] mx-auto flex justify-between">
          <IoIosSearch
            size={24}
            color="#000"
            className="cursor-pointer hidden lg:block"
          />
          <div>
            <h1 className="text-4xl font-bold text-black cursor-pointer">
              Bube
            </h1>
          </div>
          <div className="flex items-end gap-5">
            <IoIosSearch
              size={24}
              color="#000"
              className="cursor-pointer block lg:hidden"
            />
            <IoPersonOutline
              size={24}
              color="#000"
              className="cursor-pointer"
            />
            <div className="relative cursor-pointer">
              <IoBagHandleOutline size={24} color="#000" />
              <span className="text-white bg-black h-4 w-4 rounded-full text-xs flex justify-center items-center absolute -bottom-[4px] -right-1">
                3
              </span>
            </div>
          </div>
        </div>
        <NavHeader />
      </nav>
    </header>
  );
}
