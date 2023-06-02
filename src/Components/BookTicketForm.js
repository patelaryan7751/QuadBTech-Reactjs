import { useState } from "react";
import { storeObjInLocalStorage } from "../utils/localStorageFunctions";
export default function BookTicketForm(props) {
  const { showForm, currentMovie } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [movieName, setMovieName] = useState(currentMovie?.show?.name);
  const [email, setEmail] = useState("");

  const handleFieldChange = (value, name) => {
    switch (name) {
      case "first-name":
        setFirstName(value);
        break;
      case "last-name":
        setLastName(value);
        break;
      case "movie-name":
        setMovieName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        return;
    }
  };
  const storeUserData = () => {
    const userData = {
      firstName,
      lastName,
      email,
      movieName,
    };
    storeObjInLocalStorage("userData", userData);
  };
  return (
    <form>
      <div className="space-y-12 bg-black">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">
            Book Ticket
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            This information will be displayed on your ticket
          </p>
        </div>

        <div className="border-b border-white/10">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="movie-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Movie Name
              </label>
              <div className="mt-2">
                <input
                  id="movie-name"
                  name="movie-name"
                  type="text"
                  value={movieName}
                  onChange={(e) => {
                    handleFieldChange(e.target.value, e.target.name);
                  }}
                  autoComplete="movie-name"
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  name="first-name"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => {
                    handleFieldChange(e.target.value, e.target.name);
                  }}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  name="last-name"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => {
                    handleFieldChange(e.target.value, e.target.name);
                  }}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  required
                  onChange={(e) => {
                    handleFieldChange(e.target.value, e.target.name);
                  }}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-white"
          onClick={() => {
            showForm(false);
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            storeUserData();
            showForm(false);
          }}
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
