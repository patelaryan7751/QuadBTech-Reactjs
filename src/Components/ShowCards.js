import { navigate } from "raviger";
const ShowCards = (props) => {
  const { movie } = props;
  const storeArrayInLocalStorage = (key, obj) => {
    try {
      // Convert the obj to a string
      const objString = JSON.stringify(obj);
      // Store the string in local storage
      localStorage.setItem(key, objString);
    } catch (error) {
      console.error("Error storing array in localStorage:", error);
    }
  };
  const showDetails = (movie) => {
    storeArrayInLocalStorage("currentMovie", movie);
    navigate("/showdetails");
  };
  return (
    <article
      onClick={() => {
        showDetails(movie);
      }}
      key={movie.show.id}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
    >
      <img
        src={movie.show.image.original}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        <time dateTime={movie.show.premiered} className="mr-8">
          {movie.show.premiered}
        </time>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        <p>
          <span className="absolute inset-0" />
          {movie.show.name}
        </p>
      </h3>
      <div className="mr-2 my-2">
        <button
          type="button"
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 cursor-pointer"
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default ShowCards;
