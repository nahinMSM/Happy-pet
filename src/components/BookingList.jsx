import React from "react";
import { services, fieldLabels, initialForms } from "./PetServiceBooking"; // Importando os dados necessários

export default function BookingList({ bookings, setBookings }) {
  return (
    <div className="listem">
      <h2>Agendamentos</h2>
      {bookings.length > 0 ? (
        bookings.map((booking, index) => (
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
        ))
      ) : (
        <p>Nenhum agendamento encontrado.</p>
      )}
      <button onClick={() => setBookings([])} className="bg-yellow-500 text-white p-2 mt-2">
        Limpar Lista
      </button>
    </div>
  );
}
