const Footer = ()=>{
 return (
  <footer className="flex justify-between p-4">
        <div>
          <p>Seg a Sex-07:00 às 19:00h</p>
          <p>Sáb-08:00 às 16h</p>
        </div>
        <div className="flex gap-4">
          <a href="#">
            <img src="/image/instagram.png" alt="Intagram" />
          </a>
          <a href="#">
            <img src="/image/map.png" alt="Mapa" />
          </a>
          <a href="#">
            <img src="/image/contato.png" alt="Contato" />
          </a>
        </div>
        
      </footer>
 )
}

export default Footer;