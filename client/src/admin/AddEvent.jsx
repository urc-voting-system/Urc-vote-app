import { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";

const AddEvent = () => {
  const [eventName, setEventName] = useState("");
  const [bannerImg, setBannerImg] = useState(null);
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setEventName("");
    setBannerImg(null);
    setEndDate("");
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

    try {
      const response = await axios.post("http://localhost:3001/events/new", {
        eventName,
        endDate,
        status,
        bannerImg, // Base64 string
      });

      if (response.status === 200) {
        // alert("Event added Successfully :) ...");
        clearForm();
      }
    } catch (error) {
      console.log("Event not sent", error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
          Event Image
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
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="ongoing">Ongoing</option>
          <option value="coming soon">Comming Soon</option>
        </select>
        {/* <input
          id="endDate"
          type="date"
          required
          className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        /> */}
      </div>
      <button
        type="submit"
        className="flex w-fit justify-center items-center p-2 bg-blue-500 text-white font-bold rounded-sm"
      >
        Submit
      </button>

      {loading && <Spinner />}
    </form>
  );
};
export default AddEvent;
