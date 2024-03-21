import { IoPersonOutline } from "react-icons/io5";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function SideNav({
  show,
  toggle,
}: {
  show: boolean;
  toggle: () => void;
}) {
  return (
    <div className={`fixed z-50 h-[85vh] sm:h-[90vh] w-full`}>
      <div className="relative w-full h-full">
        <div
          className={`bg-black  absolute top-0 right-0 left-0 bottom-0 -z-[100] ${
            show
              ? "bg-opacity-0 sm:bg-opacity-50 sm:backdrop-blur"
              : "bg-opacity-0"
          }`}
        ></div>
        <div
          className={`w-full overflow-auto flex flex-col justify-between sm:w-[400px] bg-white h-full border-[#d4d1d1] border-[0.5px] z-[100] ease-linear duration-200 ${
            show ? "translate-x-0" : "-translate-x-[500px]"
          }`}
        >
          <ul className="py-8 px-6 space-y-6">
            <li className="text-lg">Products</li>
            <li className="text-lg">Last Call</li>
            <li className="text-lg">Social Responsibility</li>
            <li className="text-lg">Concept</li>
            <li className="text-lg">FAQ</li>
            <li className="text-lg">How to find your ring size</li>
          </ul>

          <div className="py-8 px-6 space-y-8 sm:space-y-0 bg-gray-100">
            <div className="flex gap-2 items-center sm:hidden">
              <IoPersonOutline size={25} />
              <p>Login</p>
            </div>
            <div className="flex justify-start items-end gap-x-4">
              <FaFacebookF size={20} />
              <FaInstagram size={20} />
              <FaTiktok size={20} />
              <FaYoutube size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
