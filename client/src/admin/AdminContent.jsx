import AddNominee from "./AddNominee";
import AddEvent from "./AddEvent";
import Results from "./Results";
import { useState } from "react";

const AdminContent = () => {
  const [activetab, setActiveTab] = useState("results");
  return (
    <div>
      <aside className="bg-white shadow-md px-[5%] py-1 grid grid-cols-3 gap-3">
        <button
          type="submit"
          className="flex h-12 justify-center items-center p-2 bg-blue-500 text-white font-bold rounded-sm"
          onClick={() => setActiveTab("results")}
        >
          Check Results
        </button>
        <button
          type="submit"
          className="flex h-12 justify-center items-center p-2 bg-blue-500 text-white font-bold rounded-sm"
          onClick={() => setActiveTab("addevent")}
        >
          Add New Event
        </button>
        <button
          type="submit"
          className="flex h-12 justify-center items-center p-2 bg-blue-500 text-white font-bold rounded-sm"
          onClick={() => setActiveTab("addcat")}
        >
          Add Nominees
        </button>
      </aside>
      <div className="m-5 px-[5%] py-5">
        {activetab === "results" ? (
          <Results />
        ) : activetab === "addevent" ? (
          <AddEvent />
        ) : (
          <AddNominee />
        )}
      </div>
    </div>
  );
};
export default AdminContent;
