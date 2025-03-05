const Header = ({ toggleShowBookings, bookingCount }) => {
  return (
    <header className="flex justify-between p-4">
      <img src="/image/logo-happy.gif" alt="Logo" className="w-24" />

      <button className="w-12 h-12 bg-gray-200 relative" onClick={toggleShowBookings}>
        <p>🗒️{bookingCount > 0 && (
          <span>
            {bookingCount}
          </span>
        )}</p>
        <strong>Agendados</strong>
        
      </button>
    </header>
  );
};

export default Header;
