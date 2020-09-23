import React from 'react';

class Footer extends React.Component {

  render() {
    return (
        <footer className="ftco-footer ftco-section">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">My Beauty Lausanne</h2>
                  <p>My Beauty Lausanne vous accueille dans son nouvel institut de beauté dans un cadre chaleureux au centre ville de Lausanne (Place Pépinet 2) et vous propose des soins ongulaires et corporels de qualité.</p>
                  <ul className="ftco-footer-social list-unstyled float-lft mt-3">
                    <li className="ftco-animate"><a href="https://twitter.com"><span className="icon-twitter" /></a></li>
                    <li className="ftco-animate"><a href="https://www.facebook.com/"><span className="icon-facebook" /></a></li>
                    <li className="ftco-animate"><a href="https://www.instagram.com/"><span className="icon-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Spa</a></li>
                    <li><a href="#">Treatments</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text">Place Pépinet 2, 1003 Lausanne, Suisse</span></li>
                      <li><a href="#"><span className="icon icon-phone" /><span className="text">+41 78 743 96 89</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope" /><span className="text">mybeautylausanne@gmail.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="mb-0">
                </p>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
