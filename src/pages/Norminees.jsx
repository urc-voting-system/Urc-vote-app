import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Events } from "../database/Dummydata";

function Nominees() {
  const { categoryId } = useParams();
  const [VoteMenu, setVoteMenu] = useState(false);
  const [sNominee, setsNominee] = useState(null);
  const [votes, setVotes] = useState("");
  const [Number, setNumber] = useState("");

  let sNominees = null;
  let categoryName = "";
  let eventId = "";

  Events.forEach((event) => {
    event.categories.forEach((category) => {
      if (category.id === parseInt(categoryId)) {
        sNominees = category.nominees;
        categoryName = category.name;
        eventId = event.id;
      }
    });
  });

  const handleVoteClick = (nominee) => {
    setsNominee(nominee);
    setVoteMenu(true);
  };

  const VoteSubmit = () => {
    setVoteMenu(false);
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
                to={`/categories/${eventId}`}
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
          Nominees for {categoryName}
        </h1>

        {sNominees ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sNominees.map((nominee) => (
              <div
                key={nominee.id}
                className="bg-white p-6 rounded-lg transform transition duration-300"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={nominee.image}
                    alt={nominee.name}
                    className="w-32 h-32 rounded-full border-4 border-blue-600"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {nominee.name}
                </h3>
                <div className="flex justify-center items-center w-full p-2 bg-blue-500 text-white font-bold rounded-sm">
                  <button
                    className="w-full"
                    onClick={() => handleVoteClick(nominee)}
                  >
                    Vote
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No nominees found for this category.</p>
        )}
      </div>

      {/* {VoteMenu && (
          <div className="fixed  bottom-0 left-0 right-0 bg-white p-4 border-t shadow-lg w-full  transition-transform transform translate-y-0">
            <p>50p per vote</p>
            <h2 className="text-lg font-bold mb-4">Vote for {sNominee.name}</h2>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Number of Votes
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={votes}
                onChange={(e) => setVotes(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Mobile Number
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={Number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white p-2 rounded"
              onClick={VoteSubmit}
            >
              Submit Vote
            </button>
        </div>
      )} */}
    </div>
  );
}

export default Nominees;
