import { IoCashOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function OverallOwed() {
  return (
    <div className="flex flex-col basis-2/5 gap-4 bg-gradient1 m-4 p-8 rounded-2xl">
      <div className="text-2xl font-medium">You Owe</div>
      <div className="text-gradient2 font-semibold text-sm">
        You have been partying a bit too much. This is what you are owed this month.
      </div>
      <div className="flex justify-between">
        <div className="font-serif text-gradient2 font-semibold">
          Amount Owed
        </div>
        <div className="">20$</div>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <div>
          <IoCashOutline />
        </div>
        <div className="flex items-center font-mono">
          See details
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
}
