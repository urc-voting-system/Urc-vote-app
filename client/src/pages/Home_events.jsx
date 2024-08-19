import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
// import { hero, sample } from "../assets";
import { SearchBar } from "../components";
import { Link } from "react-router-dom";

function HomeEvents() {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/events/")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const filteredEvents = events.filter((event) =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="relative max-h-[450px]">
        <div className=" inset-0 flex flex-col justify-center items-center p-5 md:mx-40">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Secure and Dependable Electronic Voting System
          </h1>
          <p className="text-xl text-center">
            Experience our trustworthy and efficient electronic voting platform
            for various events such as pageants, awards ceremonies, TV shows,
            and all types of competitions in Ghana.
          </p>
          <div className="pt-5 flex justify-center items-center w-full">
            <SearchBar setSearchQuery={setSearchQuery} />
          </div>
        </div>
      </div>

      <div className="relative py-5">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold py-10">Events</h1>
        </div>

        <div className="mx-5 md:mx-10 lg:mx-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredEvents.map((event) => (
              <Link to={`/categories/${event._id}`} key={event._id}>
                <div
                  className="card bg-blue-100 h-max rounded-lg p-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top right, #DFDCCD, #DAE7F5)",
                  }}
                >
                  <div className="object-cover flex justify-center">
                    <img src={event.bannerImg} alt="Event_Image" />
                  </div>
                  <div className="text-center font-bold py-3 text-xl">
                    <h1>{event.eventName}</h1>
                  </div>
                  <div className="flex justify-between px-3">
                    <div>
                      <h1 className="font-semibold">End Date:</h1>
                      <p>{event.endDate}</p>
                    </div>
                    <div className="bg-red-100 text-gray-700 p-2 rounded-xl text-sm font-semibold w-max flex justify-center items-center">
                      <h1>{event.status}</h1>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeEvents;
