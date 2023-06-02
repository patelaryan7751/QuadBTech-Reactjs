const Header = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <a
        href="/"
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        <span className="italic text-slate-200">Movie </span>
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block">
          <span className="relative text-white">Maniac</span>
        </span>
      </a>
      <p className="mt-2 text-lg leading-8 text-gray-200">
        Get the latest updates on your favorite TV shows.
      </p>
    </div>
  );
};
export default Header;
