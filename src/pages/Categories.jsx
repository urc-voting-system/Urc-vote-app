import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Events } from "../database/Dummydata";

function Categories() {
  const { eventId } = useParams();
  const event = Events.find((event) => event.id === parseInt(eventId));

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

        {event && (
          <div className="bg- p-6 rounded-lg shadow-sm mb-6">
            <div className="md:flex">
              <div className="flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-64 md:w-48 object-fit rounded-lg"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h1 className="text-2xl font-bold text-gray-800">
                  {event.name}
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
                {event.categories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                    <Link
                      to={`/category/nominee/${category.id}`}
                      className="text-blue-600 hover:text-blue-800 mt-2 block text-center"
                    >
                      Cast Votes
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;
