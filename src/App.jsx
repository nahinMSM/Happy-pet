import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PetServiceBooking from "./components/PetServiceBooking";
import Footer from "./components/Footer";

function App() {
  const [showBookings, setShowBookings] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);

  const toggleShowBookings = () => {
    setShowBookings((prev) => !prev);
  };

  // Atualiza a contagem sempre que o localStorage mudar
  useEffect(() => {
    const updateCount = () => {
      const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      setBookingCount(storedBookings.length);
    };

    updateCount(); // Chama na montagem

    window.addEventListener("storage", updateCount); // Escuta mudanças no localStorage

    return () => {
      window.removeEventListener("storage", updateCount); // Remove o evento ao desmontar
    };
  }, []);

  return (
    <div className="body">
      <Header toggleShowBookings={toggleShowBookings} bookingCount={bookingCount} />
      <PetServiceBooking 
      showBookings={showBookings} 
      toggleShowBookings={toggleShowBookings}
      setBookingCount={setBookingCount} />
      <Footer />
    </div>
  );
}

export default App;
