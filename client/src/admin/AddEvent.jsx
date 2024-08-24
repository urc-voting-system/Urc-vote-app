import { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";

const AddEvent = () => {
  const [eventName, setEventName] = useState("");
  const [bannerImg, setBannerImg] = useState(null);
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [catName, setCatName] = useState("");
  const [catDesc, setCatDesc] = useState("");
  const [categories, setCategories] = useState([]);

  const clearForm = () => {
    setEventName("");
    setBannerImg(null);
    setEndDate("");
    setStatus("");
    setCatName("");
    setCatDesc("");
  };

  const handleAddCat = async (e) => {
    e.preventDefault();
    try {
      if (catName === "" || catDesc === "") {
        alert("Fill all the fields");
      } else {
        const newCat = { catName, catDesc };
        const catArray = [...categories, newCat];
        setCategories(catArray);
        // console.log(catArray);
      }
    } catch (error) {
      console.log("could not add cataegory", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log({ eventName, endDate, status, bannerImg, categories });

    try {
      const response = await axios.post("http://localhost:3001/events/new", {
        eventName,
        endDate,
        status,
        bannerImg, // Base64 string
        categories,
      });
      if (response.status === 200) {
        clearForm();
        console.log(response);
      }
    } catch (error) {
      console.log("Event not sent", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-[600]">Add Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4 p-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Event Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="event_banner"
            className="block text-sm font-medium text-gray-700"
          >
            Event Image
          </label>
          <input
            id="event_banner"
            required
            type="file"
            accept=".jpeg, .png, .jpg"
            onChange={handleFileChange}
            className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            required
            className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">select</option>
            <option value="ongoing">Ongoing</option>
            <option value="coming soon">Comming Soon</option>
          </select>
        </div>

        <h2 className="text-2xl font-[600]">Add Categories</h2>
        <div>
          <div>
            <label
              htmlFor="catTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Category Title
            </label>
            <input
              id="catTitle"
              type="text"
              className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={catName}
              onChange={(e) => setCatName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="catDesc"
              className="block text-sm font-medium text-gray-700"
            >
              Category Description
            </label>
            <textarea
              id="catDesc"
              type="text"
              className="w-full h-28 px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={catDesc}
              onChange={(e) => setCatDesc(e.target.value)}
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleAddCat}
            className="flex w-fit justify-center items-center p-2 bg-blue-500 text-white font-bold rounded-sm"
          >
            Add
          </button>

          <ul className="my-5">
            {categories.length ? (
              categories.map((item) => (
                <div
                  className="flex align-center space-x-2"
                  key={Math.random() * 10}
                >
                  <span>*</span>
                  <li key={item.catName}>
                    {item.catName},{" "}
                    <span className="text-primary">created</span>
                  </li>
                </div>
              ))
            ) : (
              <p>No Categories Added Yet ...</p>
            )}
          </ul>
        </div>

        <button
          type="submit"
          className="flex w-full justify-center items-center p-2 bg-blue-500 text-white font-bold rounded-sm"
        >
          Submit
        </button>

        {loading && <Spinner />}
      </form>
    </>
  );
};
export default AddEvent;
