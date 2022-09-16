import image from '../../assets/images/Illustration-1.png';
import './styles.scss';

function Main() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-header">
                Want anything to be easy with <strong>LaslesVPN.</strong>
              </h1>
              <p className="hero-descr">
                Provide a network for all your needs with ease and fun using
                LaslesVPN discover interesting features from us.
              </p>
              <a
                href=""
                className="button button--primary button--rounded hero-button"
              >
                Get Started
              </a>
            </div>
            <div className="hero-img">
              <img
                srcSet={`${image} 2x`}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
