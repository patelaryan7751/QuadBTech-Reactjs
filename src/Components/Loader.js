import loader from "../assets/images/loader.gif";
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img className="w-full" src={loader} alt="Loading..." />
    </div>
  );
};
export default Loader;
