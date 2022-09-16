import logo from '../../assets/images/Logo.png';
import './styles.scss';
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img
          srcSet={`${logo} 2x`}
          alt="hihi"
        />
        <ul className="menu">
          <li className="menu-item">
            <a
              href=""
              className="menu-link"
            >
              About
            </a>
          </li>
          <li className="menu-item">
            <a
              href=""
              className="menu-link"
            >
              Features
            </a>
          </li>
          <li className="menu-item">
            <a
              href=""
              className="menu-link"
            >
              Pricing
            </a>
          </li>
          <li className="menu-item">
            <a
              href=""
              className="menu-link"
            >
              Testimonials
            </a>
          </li>
          <li className="menu-item">
            <a
              href=""
              className="menu-link"
            >
              Help
            </a>
          </li>
        </ul>
        <div className="header-auth">
          <a
            href=""
            className="signin"
          >
            Sign In
          </a>
          <a
            href=""
            className="signup button button--outline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
