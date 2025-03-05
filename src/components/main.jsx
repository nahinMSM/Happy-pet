import React, { useState } from "react";

const services = [
  { id: "hotel", name: "Hotel 24h" },
  { id: "daycare", name: "Day Care" },
  { id: "creche", name: "Creche" },
  { id: "banho", name: "Banho" }
];

export default function PetServiceBooking() {
  const [selectedService, setSelectedService] = useState(null);
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleConfirm = () => {
    const newBookings = [...bookings, { ...formData, service: selectedService }];
    localStorage.setItem("bookings", JSON.stringify(newBookings));
    setBookings(newBookings);
    setSelectedService(null);
  };

  const handleCancel = () => setSelectedService(null);

  return (
    <div className="p-4 text-center">
      <header className="flex justify-between p-4">
        <img src="logo.png" alt="Logo" className="w-24" />
        <button className="w-12 h-12 bg-gray-200">🔘</button>
      </header>
      
      {!selectedService ? (
        <main className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              className="p-4 border rounded shadow"
              onClick={() => setSelectedService(service.name)}
            >
              <img src={`${service.id}.png`} alt={service.name} className="w-full" />
              <p>{service.name}</p>
            </button>
          ))}
        </main>
      ) : (
        <div className="p-4 border rounded shadow">
          <h2>Agendar {selectedService}</h2>
          <input
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Telefone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border p-2 w-full mt-2"
          />
          <div className="flex justify-between mt-4">
            <button onClick={handleCancel} className="bg-red-500 text-white p-2">Cancelar</button>
            <button onClick={handleConfirm} className="bg-green-500 text-white p-2">Confirmar</button>
          </div>
        </div>
      )}

      {bookings.length > 0 && (
        <div className="mt-4 p-4 border rounded shadow">
          <h2>Agendamentos</h2>
          {bookings.map((booking, index) => (
            <div key={index} className="border-b p-2">
              {booking.name} - {booking.service}
            </div>
          ))}
          <button onClick={() => setBookings([])} className="bg-yellow-500 text-white p-2 mt-2">
            Limpar Lista
          </button>
        </div>
      )}

      <footer className="flex justify-between p-4">
        <div className="flex gap-4">
          <a href="#">📞</a>
          <a href="#">📸</a>
          <a href="#">📍</a>
        </div>
        <p>🕛Seg a Sex-07:00 às 19:00h 🕛Sáb-08:00 às 16h</p>
      </footer>
    </div>
  );
}
