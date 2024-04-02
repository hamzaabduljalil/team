import "./Footer.css";
import footer from "../imgs/footer.svg";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="container">
          <div className="info">
            <a href="https://royald.onrender.com/">
              <img src={footer} alt=""></img>
            </a>
          </div>

          <div>
            <ul className="socail">
              <li>
                <a href="">Fb</a>
              </li>
              <li>
                <a href="">Lg</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-text">
          ©{date} <span>Royal Dom</span> | All Right Reserved
        </div>
      </div>
    </div>
  );
};
export default Footer;
