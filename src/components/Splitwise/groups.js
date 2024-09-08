import { CiSearch } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";

export default function Groups() {
  const activities = [
    {
      id: 1,
      name: "Condo",
      lastUpdated: "Today",
      amount: "-$12.85",
    },
    {
      id: 2,
      name: "Condo",
      lastUpdated: "Today",
      amount: "-$12.85",
    },
    {
      id: 3,
      name: "Condo",
      lastUpdated: "Today",
      amount: "-$12.85",
    },
    {
      id: 4,
      name: "Condo",
      lastUpdated: "Today",
      amount: "-$12.85",
    },
    {
      id: 5,
      name: "Condo",
      lastUpdated: "Today",
      amount: "-$12.85",
    },
    {
      id: 6,
      name: "Condo",
      lastUpdated: "Today",
      amount: "-$12.85",
    },
  ];
  return (
    <div className="flex grow flex-col gap-2 mx-1">
      <div className="flex">
        <input
          name="Search"
          className="self-center p-2 pl-8 m-2 rounded-3xl border-opacity-50 border-2 border-gradient2"
          placeholder="Enter for Search"
        />
      </div>
      <hr />
      <div className="flex justify-center">
        <div className="flex grow bg-red-400 rounded-md justify-center items-center p-2">Add new group</div>
      </div>
      <hr />
      <div>
        {activities.map((activity) => {
          return (
            <div key={activity.id} className="flex bg-gradient2 hover:bg-gradient3 p-2 justify-between">
              <div className="flex items-center gap-2">
                <IoPersonSharp />
                <div>
                  <p>{activity.name}</p>
                  <p>Last Updated: {activity.lastUpdated}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p>{activity.amount}</p>
                <p>You Owe</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
