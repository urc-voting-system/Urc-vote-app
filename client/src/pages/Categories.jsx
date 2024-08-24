import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { Events } from "../database/Dummydata";
import { useState, useEffect } from "react";

function Categories() {
  // const { eventId } = useParams();
  // const event = Events.find((event) => event.id === parseInt(eventId));

  const [event, setEvent] = useState([]);
  const [index, setIndex] = useState(null);
  const ID = useParams();

  const id = ID.eventId;

  useEffect(() => {
    fetch(`http://localhost:3001/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <ol className="list-reset flex">
            <li>
              <a href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <span className="text-gray-500">Categories</span>
            </li>
          </ol>
        </nav>
        {event ? (
          <div className="p-6 rounded-lg shadow-sm mb-6">
            <div className="md:flex">
              <div className="flex-shrink-0">
                <img
                  src={event.bannerImg}
                  alt={event.eventName}
                  className="w-full h-64 md:w-48 object-cover rounded-lg"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h1 className="text-2xl font-bold text-gray-800">
                  {event.eventName}
                </h1>
                <h2 className="mt-2 text-lg font-semibold text-gray-600">
                  End Date:
                </h2>
                <p className="text-gray-600">{event.endDate}</p>
                <h2 className="mt-2 text-lg font-semibold text-gray-600">
                  Status:
                </h2>
                <p className="text-gray-600">{event.status}</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800">Categories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {event.categories && event.categories.length > 0 ? (
                  event.categories.map((category, index) => (
                    <div
                      key={category._id}
                      className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {category.catName}
                      </h3>
                      <p className="text-gray-600">{category.catDesc}</p>
                      <Link
                        to={`/category/${event._id}-${index}-${category._id}/nominees`}
                        onClick={() => setIndex(index)}
                        className="text-white py-2 bg-blue-500 mt-2 block text-center"
                      >
                        See Details
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>No categories available</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading event details...</p>
        )}
      </div>
    </div>
  );
}

export default Categories;
