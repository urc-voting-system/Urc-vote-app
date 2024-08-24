import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";

const AddNominee = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeEvent, setActiveEvent] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [eventName, setEventName] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const [nomineeName, setNomineeName] = useState("");
  const [nomineeImg, setNomineeImg] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/events/")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const getCategories = (e) => {
    const eventId = e.target.value;
    setActiveEvent(eventId);

    fetch(`http://localhost:3001/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
        setEventName(data.eventName);
      });
  };

  const clearForm = () => {
    setActiveCategory("");
    setActiveEvent("");
    setNomineeImg(null);
    setNomineeName("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNomineeImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCatChange = (e) => {
    setActiveCategory(e.target.value);
    // setCategoryName(e.target.value.catName);
    // console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // console.log(activeEvent);
      // console.log(activeCategory);
      // console.log(nomineeName);
      // console.log(nomineeImg);
      const response = await axios.post("http://localhost:3001/nominees/new", {
        eventNumber: activeEvent,
        categoryNumber: activeCategory,
        eventName,
        // categoryName,
        nomineeName,
        nomineeImg, // Base64 string
      });
      if (response.status === 200) {
        clearForm();
        console.log("Nominee added successfully");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row sm:align-center space-x-5 mb-8">
        <select
          name="event"
          id="event"
          required
          value={activeEvent}
          onChange={getCategories}
        >
          <option value="" disabled>
            Select an event
          </option>
          {events.map((event) => (
            <option key={event._id} value={event._id}>
              {event.eventName}
            </option>
          ))}
        </select>

        <select
          name="category"
          id="category"
          required
          value={activeCategory}
          onChange={handleCatChange}
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.catName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <label
          htmlFor="nomineeName"
          className="block text-sm font-medium text-gray-700"
        >
          Nominee Name
        </label>
        <input
          id="nomineeName"
          type="text"
          required
          className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={nomineeName}
          onChange={(e) => setNomineeName(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <label
          htmlFor="nomineeImg"
          className="block text-sm font-medium text-gray-700"
        >
          Nominee Profile
        </label>
        <input
          id="nomineeImg"
          required
          type="file"
          accept=".jpeg, .png, .jpg"
          onChange={handleFileChange}
          className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="flex w-full justify-center items-center p-2 bg-blue-500 text-white font-bold rounded-sm"
      >
        Submit
      </button>

      {loading && <Spinner />}
    </form>
  );
};

export default AddNominee;
