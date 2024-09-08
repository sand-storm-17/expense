import { MdOutlinePerson } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

export default function Splitwise() {
  return (
    <div className="flex justify-between px-4">
      <div className="flex basis-1/4">Recent Activity</div>
      <div className="flex basis-1/4">
        <Groups />
      </div>
      <div className="flex flex-1 basis-2/4 flex-col gap-2">
        <SplitwiseHeader groupName="Condo" />
        <hr />
        <Balances />
        <hr />
        <History />
      </div>
    </div>
  );
}

export function SplitwiseHeader({ groupName }) {
  return (
    <div className="flex justify-between">
      <div>{groupName}</div>
      <div className="flex gap-3">
        <button className="flex gap-2 bg-gradient2 rounded-md p-2 justify-center items-center">
          <MdOutlinePerson />
          Add Payment
        </button>
        <button className="flex gap-2 bg-violet-400 rounded-md p-2 justify-center items-center">
          <FaPlus />
          Add Expense
        </button>
      </div>
    </div>
  );
}

export function Balances() {
  return (
    <div>
      <div>Balances</div>
      <div>Nitansh owes you 10000</div>
      <div>You owe Pranav 0.1</div>
    </div>
  );
}

const transactions = [
  {
    id: 1,
    month: "January 2024",
    typeOfTransaction: "You Owe",
    name: "Electricity Bill",
    amount: "$80",
    payer: "Sandeep",
    payedAmount: "189",
  },
  {
    id: 2,
    month: "January 2024",
    typeOfTransaction: "Not Involved",
    name: "Electricity Bill",
    amount: "$80",
    payer: "Sandeep",
    payedAmount: "189",
  },
];

export function History() {
  return (
    <div className="flex flex-col gap-2">
      {transactions.map((transaction) => {
        if (transaction.typeOfTransaction === "You Owe") {
          return (
            <YouOwe
              key={transaction.id}
              name={transaction.name}
              amount={transaction.amount}
              payer={transaction.payer}
              payedAmount={transaction.payedAmount}
            />
          );
        } else if (transaction.typeOfTransaction === "Not Involved") {
          return (
            <NotInvolved
              key={transaction.id}
              name={transaction.name}
              amount={transaction.amount}
              payer={transaction.payer}
              payedAmount={transaction.payedAmount}
            />
          );
        }
      })}
    </div>
  );
}

import { MdOutlineTrendingDown } from "react-icons/md";

export function YouOwe({ name, amount, payer, payedAmount }) {
  return (
    <div className="flex bg-gradient-to-r from-red-500 to-red-300 font-semibold rounded-md p-2 justify-between">
      <div className="flex justify-center items-center gap-2">
        <div className="rounded-full bg-red-600 p-2">
          <MdOutlineTrendingDown />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p>{name}</p>
          <p>
            {payer} paid {payedAmount}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end">
        <p>{amount}</p>
        <p>You Owe</p>
      </div>
    </div>
  );
}

import { LuCircleDollarSign } from "react-icons/lu";
import Groups from "./groups";

export function NotInvolved({ name, amount, payer, payedAmount }) {
  return (
    <div className="flex bg-gradient-to-r from-gray-300 to-gray-100 font-semibold rounded-md p-2 justify-between">
      <div className="flex justify-center items-center gap-2">
        <div className="rounded-full bg-gray-400 p-2">
          <LuCircleDollarSign />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p>{name}</p>
          <p>
            {payer} paid {payedAmount}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p>Not Concerned</p>
      </div>
    </div>
  );
}
