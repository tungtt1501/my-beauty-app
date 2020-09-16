import React from 'react';

class Footer extends React.Component {

  render() {
    return (
        <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Energen</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul className="ftco-footer-social list-unstyled float-lft mt-3">
                  <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Popular Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#">Aromatheraphy</a></li>
                  <li><a href="#">Skin Care</a></li>
                  <li><a href="#">Herbal Spa</a></li>
                  <li><a href="#">Body Massage</a></li>
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
                  <li><a href="#">Specialists</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
      );
    }
}

export default Footer;
