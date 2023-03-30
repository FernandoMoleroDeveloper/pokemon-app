import { FormattedMessage } from "react-intl";
import "./Footer.scss";

const Footer = ({ smaller, background }) => {
  return (
    <footer className={`footer ${background ? `background-${background}` : ""} ${smaller ? "footer--smaller" : ""} `}>
      <p className="footer__text">
        <FormattedMessage id="footer:text" />
      </p>
    </footer>
  );
};

export default Footer;
