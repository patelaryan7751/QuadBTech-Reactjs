import AppRouter from "./Routes/AppRouter";
function App() {
  return (
    <>
      <div className="bg-black py-16 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AppRouter />
        </div>
      </div>
    </>
  );
}

export default App;
