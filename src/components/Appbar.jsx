import { CiCircleAlert } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
function Appbar() {
  return (
    <div className="flex flex-shrink flex-grow-0 flex-auto w-full p-2 m-auto bg-background text-textColor">
      <div className="flex w-1/6 ml-7 justify-start text-2xl self-center">Icon</div>

      <div className="flex flex-row w-5/6 items-center justify-between m-5 ">
        <div className="relative w-4/6">
          <CiSearch className="absolute translate-y-5 translate-x-5 " />
          <input
            name="Search"
            className="self-center p-2 pl-8 m-2 rounded-3xl border-opacity-50 border-2 w-3/5 border-gradient2"
            placeholder="Search here"
          />
        </div>
        <div className="flex justify-center items-center w-2/6">
          <button className="rounded-full border-opacity-40 border border-gradient2 p-2 m-1">
            <CiCircleAlert />
          </button>
          <button className="rounded-full border-opacity-40 border border-gradient2 p-2 m-1">
            <IoMdNotificationsOutline />
          </button>
          <div className="flex w-60 m-2 p-1 border-gradient2 border-opacity-30 justify-evenly rounded-lg border-2 overflow-hidden items-center">
            <img src={"./next.svg"} alt="avatar" className="flex w-1/5 border-none rounded-full overflow-hidden " />
            <div className="flex w-3/5 overflow-hidden">Username</div>
            <button className="flex"><IoIosArrowDown /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
