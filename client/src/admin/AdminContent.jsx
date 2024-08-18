import AddCategory from "./AddCategory";
import AddEvent from "./AddEvent";
import { useState } from "react";

const AdminContent = () => {
  const [activetab, setActiveTab] = useState("all");
  return (
    <div>
      <aside className="bg-white shadow-md px-[5%] py-1 grid grid-cols-2 gap-3">
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
          Add New Category
        </button>
      </aside>
      <div className="m-5 px-[5%] py-5">
        {activetab === "all" ? (
          "all"
        ) : activetab === "addevent" ? (
          <AddEvent />
        ) : (
          <AddCategory />
        )}
      </div>
    </div>
  );
};
export default AdminContent;
