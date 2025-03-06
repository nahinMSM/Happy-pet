import React, { useState } from "react";

const services = [
  { id: "hotel", name: "Hotel 24h" },
  { id: "daycare", name: "Day Care" },
  { id: "creche", name: "Creche" },
  { id: "banho", name: "Banho" }
];

const initialForms = {
  hotel: { name: "", age: "", breed: "", owner: "", phone: "", checkIn: "", checkOut: "" },
  daycare: { name: "", age: "", breed: "", owner: "", phone: "", date: "" },
  creche: { name: "", age: "", breed: "", owner: "", phone: "", shift: "" },
  banho: { name: "", age: "", breed: "", furColor: "", owner: "", phone: "", dateTime: "", option: "" }
};

const fieldLabels = {
  hotel: {
    name: "Nome do cão",
    age: "Idade",
    breed: "Raça",
    owner: "Nome do tutor",
    phone: "Telefone do tutor",
    checkIn: "Data e hora da entrada",
    checkOut: "Data e hora da saída"
  },
  daycare: {
    name: "Nome do cão",
    age: "Idade",
    breed: "Raça",
    owner: "Nome do tutor",
    phone: "Telefone do tutor",
    date: "Data"
  },
  creche: {
    name: "Nome do cão",
    age: "Idade",
    breed: "Raça",
    owner: "Nome do tutor",
    phone: "Telefone do tutor",
    shift: "Turno",
  },
  banho: {
    name: "Nome do cão",
    age: "Idade",
    breed: "Raça",
    furColor: "Cor da pelagem",
    owner: "Nome do tutor",
    phone: "Telefone do tutor",
    dateTime: "Data e hora",
    option: "Opção"
  }
};

export default function PetServiceBooking({ showBookings, toggleShowBookings, setBookingCount }) {
  const [selectedService, setSelectedService] = useState(null);
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );
  const [formData, setFormData] = useState(initialForms);

  const handleConfirm = () => {
    const updatedBookings = bookings.some(b => b.service === selectedService)
      ? bookings.map(b => 
          b.service === selectedService 
            ? { ...formData[selectedService], service: selectedService }
            : b
        )
      : [...bookings, { ...formData[selectedService], service: selectedService }];
  
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    setSelectedService(null);
    setFormData(initialForms);
    setBookingCount(updatedBookings.length);
  };

  const handleCancel = () => {
    setFormData(initialForms);
    setSelectedService(null);
  };

  return (
    <div className="p-4 text-center">
      {!showBookings ? (
        !selectedService ? (
          <main className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                className="p-4 border rounded shadow"
                onClick={() => setSelectedService(service.id)}
              >
                <img src={`/image/${service.id}.png`} alt={service.name} className="w-full" />
                <p>{service.name}</p>
              </button>
            ))}
          </main>
        ) : (
          <div className="form p-4 border rounded shadow">
          <h2>Agendar {services.find(s => s.id === selectedService)?.name}</h2>
          {Object.keys(initialForms[selectedService]).map((field) => (
            <div key={field} className="mt-2">
              <label className="block text-left">{fieldLabels[selectedService][field]}</label>
              {field.includes("date") || field.includes("check") ? (
                <input
                  type="datetime-local"
                  value={formData[selectedService][field]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [selectedService]: { ...formData[selectedService], [field]: e.target.value }
                    })
                  }
                  className="border p-2 w-full"
                />
              ) : field === "shift" ? (
                <select
                  value={formData[selectedService][field]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [selectedService]: { ...formData[selectedService], [field]: e.target.value }
                    })
                  }
                  className="border p-2 w-full"
                >
                  <option value="">Selecione</option>
                  <option value="manhã">Manhã</option>
                  <option value="tarde">Tarde</option>
                </select>
              ) : field === "option" ? (
                <select
                  value={formData[selectedService][field]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [selectedService]: { ...formData[selectedService], [field]: e.target.value }
                    })
                  }
                  className="border p-2 w-full"
                >
                  <option value="">Selecione</option>
                  <option value="banho">Banho</option>
                  <option value="banho+tosa">Banho + Tosa</option>
                  <option value="banho+tosa+hidratação">Banho + Tosa + Hidratação</option>
                </select>
              ) : (
                <input
                  type="text"
                  value={formData[selectedService][field]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [selectedService]: { ...formData[selectedService], [field]: e.target.value }
                    })
                  }
                  className="border p-2 w-full"
                />
              )}
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button onClick={handleCancel} className="bg-red-500 text-white p-2">Cancelar</button>
            <button onClick={handleConfirm} className="bg-green-500 text-white p-2">Confirmar</button>
          </div>
        </div>
        )
      ) : (
        <div className="listem">
          <h2>Agendamentos</h2>
          {bookings.map((booking, index) => (
            <ul key={index} className="border-b p-2">
              <li><span>Serviço:</span> {services.find(s => s.id === booking.service)?.name}</li>
              {Object.keys(initialForms[booking.service]).map((field) => (
                booking[field] && (
                  <li key={field}>
                    <span>{fieldLabels[booking.service][field]}: </span>  
                    {field.includes("date") || field.includes("check") || field.includes("dateTime")
                      ? new Date(booking[field]).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })
                      : booking[field]
                    }
                  </li>
                )
              ))}
            </ul>
          ))}
          <button onClick={() => {
            setBookings([]);
            localStorage.removeItem('bookings');
            setBookingCount(0);
            }}>
            Limpar Lista 🗑️
          </button>
          <button onClick={toggleShowBookings} className="bg-blue-500 text-white p-2 mt-2">
            Voltar ⬅️
          </button>
        </div>
      )}
    </div>
  );
}
