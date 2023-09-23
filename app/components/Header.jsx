import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoSquareFill } from "react-icons/bs";

const Header = () => {
  return (
    <div >
      <div className="flex justify-between max-w-6xl sm:mx-auto items-center">
        <div className="flex">
          <MenuItem title="HOME" address="/" Icon={AiFillHome} />
          <MenuItem title="About" address="/about" Icon={BsInfoSquareFill} />
        </div>
        <div className="">
          <h2>
            <span className="bg-amber-400 text-2xl p-2 rounded-lg font-bold">
              IMDb
            </span>
            <span>Clone</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Header;
