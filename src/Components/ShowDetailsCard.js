const ShowDetailsCard = (props) => {
  const { currentMovie, showForm } = props;
  const convertToHtml = (text) => {
    return { __html: text };
  };
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
      <div className="w-full lg:max-w-lg lg:flex-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {currentMovie?.show?.name}
        </h2>
        <p className="mt-6 text-xl leading-8 text-slate-200">
          {currentMovie?.show?.premiered}
        </p>
        <img
          src={currentMovie?.show?.image?.original}
          alt=""
          className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
        />
      </div>
      <div className="w-full lg:max-w-xl lg:flex-auto">
        <ul className="my-8 divide-y divide-white">
          <li className="py-8">
            <dl className="relative flex flex-wrap gap-x-3">
              <dd className="w-full flex-none text-lg font-semibold tracking-tight text-white">
                <p>
                  Summary
                  <span className="absolute inset-0" aria-hidden="true" />
                </p>
              </dd>
              <dt className="sr-only">Summary</dt>
              <dd className="mt-2 w-full flex-none text-base leading-7 text-white">
                <div
                  dangerouslySetInnerHTML={convertToHtml(
                    currentMovie?.show?.summary
                  )}
                />
              </dd>
            </dl>
          </li>
        </ul>
        <div className="mt-8 flex border-t border-gray-100 pt-8">
          <button
            type="button"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 cursor-pointer"
            onClick={() => {
              showForm(true);
            }}
          >
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsCard;
