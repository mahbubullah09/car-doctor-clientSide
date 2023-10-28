import logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
        <div>
          <img src={logo} alt="" />
          <p>Car Doctor<br/>Providing service since 1992</p>
        </div> 
        <nav>
          <header className="footer-title">About</header> 
          <a className="link link-hover">Home</a> 
          <a className="link link-hover">Service</a> 
          <a className="link link-hover">Contact</a> 
          
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">Why Car Doctor</a> 
          <a className="link link-hover">About</a> 
          
        </nav> 
        <nav>
          <header className="footer-title">Support</header> 
          <a className="link link-hover">Support Center</a> 
          <a className="link link-hover">Feedback</a> 
          <a className="link link-hover">Accesbility</a>
        </nav>
      </footer>
    );
};

export default Footer;