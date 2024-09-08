import { IoCashOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MonthlyDetails() {
  return (
    <div className="flex flex-col basis-2/5 gap-4 bg-gradient1 m-4 p-8 rounded-2xl">
      <div className="text-2xl font-medium">Monthly Spend</div>
      <div className="text-gradient2 font-semibold text-sm">
        Your spending this month has been 20$. Make sure that you are not
        spending frivolously.
      </div>
      <div className="flex justify-between">
        <div className="font-serif text-gradient2 font-semibold">Monthly Change</div>
        <div className="">20$</div>
      </div>
      <hr/>
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
