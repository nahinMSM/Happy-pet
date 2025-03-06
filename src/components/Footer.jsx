const Footer = ()=>{
 return (
  <footer className="flex justify-between p-4">
        <div>
          <p>Seg a Sex-07:00 às 19:00h</p>
          <p>Sáb-08:00 às 16h</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/happypetaju/" target="blank">
            <img src="/image/instagram.png" alt="Intagram" />
          </a>
          <a href="https://www.google.com/maps/place/Happy+Pet+-+Day+Care+e+Hotel+Pet/@-10.991537,-37.0517705,15z/data=!4m6!3m5!1s0x71ab1e87101e013:0x1a1e44e30daa16fc!8m2!3d-10.991537!4d-37.0517705!16s%2Fg%2F11mvrrzm4v?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D" target="blank">
            <img src="/image/map.png" alt="Mapa" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5579981025931&text=&type=phone_number&app_absent=0" target="blank">
            <img src="/image/contato.png" alt="Contato" />
          </a>
        </div>
        
      </footer>
 )
}

export default Footer;