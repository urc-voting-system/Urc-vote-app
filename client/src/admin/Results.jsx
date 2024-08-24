import { useState, useEffect } from "react";

const Results = () => {
  const [activeEvent, setActiveEvent] = useState("all");
  const [activeCategory, setActiveCategory] = useState("");
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [nominees, setNominees] = useState([]);
  const [filteredNominees, setFilteredNominees] = useState([]);

  // Fetch all nominees and events on component mount
  useEffect(() => {
    const fetchEventsAndNominees = async () => {
      try {
        const [eventsRes, nomineesRes] = await Promise.all([
          fetch("http://localhost:3001/events/"),
          fetch("http://localhost:3001/nominees"),
        ]);

        const eventsData = await eventsRes.json();
        const nomineesData = await nomineesRes.json();

        setEvents(eventsData);
        setNominees(nomineesData);
        setFilteredNominees(nomineesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEventsAndNominees();
  }, []);

  // Handle event selection and filter categories
  const handleEventChange = (e) => {
    const eventId = e.target.value;
    setActiveEvent(eventId);

    if (eventId === "all") {
      setCategories([]);
      setFilteredNominees(nominees);
    } else {
      const selectedEvent = events.find((event) => event._id === eventId);
      setCategories(selectedEvent.categories);

      const eventNominees = nominees.filter(
        (nominee) => nominee.eventNumber === eventId
      );
      setFilteredNominees(eventNominees);
    }

    // Reset category selection when event changes
    setActiveCategory("");
  };

  // Handle category selection and filter nominees
  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setActiveCategory(categoryId);

    if (categoryId === "") {
      const eventNominees = nominees.filter(
        (nominee) => nominee.eventNumber === activeEvent
      );
      setFilteredNominees(eventNominees);
    } else {
      const categoryNominees = nominees.filter(
        (nominee) =>
          nominee.eventNumber === activeEvent &&
          nominee.categoryNumber === categoryId
      );
      setFilteredNominees(categoryNominees);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:align-center space-x-5 mb-8">
        <div>
          <label htmlFor="event" className="font-bold">
            Select an Event
          </label>
          <br />
          <select
            name="event"
            id="event"
            required
            value={activeEvent}
            onChange={handleEventChange}
          >
            <option value="all">All</option>
            {events.map((event) => (
              <option key={event._id} value={event._id}>
                {event.eventName}
              </option>
            ))}
          </select>
        </div>

        {activeEvent !== "all" && (
          <div>
            <label htmlFor="category" className="font-bold">
              Select a Category
            </label>
            <br />
            <select
              name="category"
              id="category"
              required
              value={activeCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.catName}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main>
        {filteredNominees.length > 0 ? (
          <div className="grid align-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {filteredNominees.map((nominee) => (
              <div
                key={nominee._id}
                className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 cursor-default"
              >
                <div className="flex justify-center">
                  <img
                    src={nominee.nomineeImg}
                    alt="nominee's Image"
                    className="w-32 h-32 rounded-full border-4 border-blue-600"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-800 text-center">
                  {nominee.nomineeName}
                </h3>
                <small>Event: {nominee.eventName}</small>
                <br />
                <small>Category: {nominee.categoryName}</small>
                <div className="flex justify-center items-center mt-3 w-full p-2 bg-blue-500 text-white font-bold rounded-sm">
                  <div className="w-full text-center">
                    {nominee.votesCount == 0 ? "0" : nominee.votesCount} Votes
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "No Nominees Available"
        )}
      </main>
    </>
  );
};

export default Results;
