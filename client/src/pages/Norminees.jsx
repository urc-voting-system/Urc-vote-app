import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Nominees() {
  const eventId = useParams();
  const [Nominees, setNominees] = useState([
    {
      id: 1,
      name: "Nominee Max",
      img: "max img",
    },
  ]);
  const [data, setData] = useState([]);

  const [ID, index] = eventId.id.split("-");

  useEffect(() => {
    fetch(`http://localhost:3001/events/${ID}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // setNominees(data.categories[index].nominees);
      });
  }, []);

  // console.log(data.categories[index]);

  const handleVoteSubmit = async () => {
    try {
    } catch (error) {
      console.error("Error submitting vote:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <ol className="list-reset flex">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link
                // to={`/categories/${eventId}`}
                className="text-blue-600 hover:text-blue-800"
              >
                Categories
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <span className="text-gray-500">Nominees</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-xl md:text-3xl font-bold mb-6 text-center">
          {data.eventName} /
        </h1>

        <div>
          {Nominees && Nominees.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Nominees.map((nominee) => (
                <div
                  key={nominee.id}
                  className="bg-white p-6 rounded-lg transform transition duration-300"
                >
                  {/* <div className="flex justify-center mb-4">
            <img
              src={nominee.image}
              alt={nominee.name}
              className="w-32 h-32 rounded-full border-4 border-blue-600"
            />
          </div> */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {nominee.name}
                  </h3>
                  <div className="flex justify-center items-center w-full p-2 bg-blue-500 text-white font-bold rounded-sm">
                    <button
                      className="w-full"
                      onClick={() => handleVoteSubmit(nominee.id)}
                    >
                      Vote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No nominees found for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nominees;
