import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

function Modal({ setModalStatus, modalStatus, handleVoteSubmit }) {
  const [localVoterEmail, setLocalVoterEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleVoteSubmit(localVoterEmail);
  };

  return (
    <div
      className={`fixed left-0 ${
        modalStatus === "closed" ? "top-[-100%]" : "top-0"
      } w-full h-[100vh] bg-darkVariant z-20 flex align-center justify-center`}
    >
      <form className="bg-white p-4 rounded-md relative" onSubmit={onSubmit}>
        <h1
          onClick={() => setModalStatus("closed")}
          className="absolute top-[-1rem] right-[2rem] text-red-500 cursor-pointer text-[3rem] font-bold"
        >
          &times;
        </h1>
        <div className="mt-10">
          <label
            htmlFor="voterEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Your Email
          </label>
          <input
            id="voterEmail"
            type="email"
            required
            className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={localVoterEmail}
            onChange={(e) => setLocalVoterEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="flex w-full justify-center items-center p-2 bg-blue-500 text-white font-bold rounded-sm"
        >
          ADD VOTE
        </button>
      </form>
    </div>
  );
}

function Nominees() {
  const { id } = useParams();
  const [Nominees, setNominees] = useState([]);
  const [data, setData] = useState([]);
  const [modalStatus, setModalStatus] = useState("closed");
  const [activeNominee, setActiveNominee] = useState(0);

  const [eventID, index, categoryID] = id.split("-");

  useEffect(() => {
    fetch(`http://localhost:3001/events/${eventID}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    let nomineesList = [];

    fetch("http://localhost:3001/nominees")
      .then((res) => res.json())
      .then((data) => {
        for (let nominee of data) {
          if (
            nominee.eventNumber === eventID &&
            nominee.categoryNumber === categoryID
          )
            nomineesList.push(nominee);
          setNominees(nomineesList);
        }
      });
  }, [eventID, categoryID]);

  const openModal = (id) => {
    setModalStatus("opened");
    setActiveNominee(id);
  };

  const handleVoteSubmit = async (email) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/nominees/${activeNominee}/update`,
        { email }
      );

      if (response.status === 200) {
        console.log("Vote submitted successfully for nominee:", activeNominee);
        setModalStatus("closed");
      } else {
        console.log("Unexpected response:", response);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error(
          "This email has already voted:",
          error.response.data.message
        );
      } else {
        console.error("Error submitting vote:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Modal
        setModalStatus={setModalStatus}
        modalStatus={modalStatus}
        handleVoteSubmit={handleVoteSubmit}
      />
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
                to={`/categories/${eventID}`}
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
          {data.eventName} / ...
        </h1>

        <div>
          {Nominees && Nominees.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Nominees.map((nominee) => (
                <div
                  key={nominee._id}
                  className="bg-white p-6 rounded-lg transform transition duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={nominee.nomineeImg}
                      alt="nominee's Image"
                      className="w-32 h-32 rounded-full border-4 border-blue-600"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {nominee.nomineeName}
                  </h3>
                  <div className="flex justify-center items-center w-full p-2 bg-blue-500 text-white font-bold rounded-sm">
                    <button
                      className="w-full"
                      onClick={() => openModal(nominee._id)}
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
