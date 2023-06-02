import Loader from "../Components/Loader";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data, "hi");
  }, [data]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white py-16 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="italic text-slate-900">Movie </span>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block">
                  <span className="relative text-white">Maniac</span>
                </span>
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Get the latest updates on your favorite TV shows.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {data.map((movie) => (
                <article
                  key={movie.show.id}
                  className="flex flex-col items-start justify-between"
                >
                  <div className="relative w-full">
                    <img
                      src={movie.show.image.original}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={movie.show.premiered}
                        className="text-gray-500"
                      >
                        {movie.show.premiered}
                      </time>
                      <a
                        href={movie.show.officialSite}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {movie.show.name}
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={movie.show.officialSite}>
                          <span className="absolute inset-0" />
                          {movie.show.name}
                        </a>
                      </h3>
                      <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {movie.show.summary}
                      </div>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      {/* <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-100"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div> */}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
