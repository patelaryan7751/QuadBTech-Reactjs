import { navigate } from "raviger";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import ShowDetailsCard from "../Components/ShowDetailsCard";
import BookTicketForm from "../Components/BookTicketForm";

export default function ShowDetails() {
  const [currentMovie, setCurrentMovie] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Retrieve the stored data from localStorage
    const storedDataString = localStorage.getItem("currentMovie");

    if (storedDataString) {
      // If data exists, parse it back to an array
      const parsedData = JSON.parse(storedDataString);

      setCurrentMovie(parsedData);
    } else {
      navigate("/");
    }
  }, []);
  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showForm = (value) => {
    setIsFormOpen(value);
    ScrollToTopButton();
  };

  return (
    <>
      <Header />
      {isFormOpen && (
        <BookTicketForm currentMovie={currentMovie} showForm={showForm} />
      )}
      <ShowDetailsCard currentMovie={currentMovie} showForm={showForm} />
    </>
  );
}
