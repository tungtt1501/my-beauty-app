import React from 'react';
import { Element } from 'react-scroll';
import './Header.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomIcon from '@material-ui/icons/Room';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';

class Header extends React.Component {

  render() {
    return (
      <Element id="home" name="home">
        <section className="hero-wrap js-fullheight" style={{ backgroundImage: 'url(images/bg_1.jpg' }} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-10 ftco-animate text-center">
                <img className="header-img" src={'images/icon.png'} />
                <div className="row justify-content-center">
                  <div className="col-md-10 mb-10">
                    <p style={{ color: 'green' }}>My Beauty Lausanne vous accueille dans son nouvel institut de beauté dans un cadre chaleureux au centre ville de Lausanne (Place Pépinet 2) et vous propose des soins ongulaires et corporels de qualité.</p>
                  </div>
                  <div className="col-md-10 mb-3 info-total-header">
                    <div className="col-md-6">
                      <ul className="ul-header">
                        <li className="li-header">
                          <RoomIcon className="icon-header" />
                          <div className="info-header">
                            <span class="text header-text">Place Pépinet 2, 1003 Lausanne</span>
                          </div>
                        </li>
                        <li className="li-header">
                          <AccessTimeIcon className="icon-header" />
                          <div className="info-header">
                            <span class="text header-text">Lu - ve: 9h à 19h<br/>Sa: 10h à 18h
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul style={{ listStyle: "none" }}>
                        <li className="li-header">
                          <LanguageIcon className="icon-header" />
                          <div className="info-header">
                            <span class="text header-text">my-beauty-lausanne.ch</span>
                          </div>
                        </li>
                        <li className="li-header">
                          <span class="icon-facebook span-icon-header"></span>
                          <div className="info-header">
                            <span class="text header-text">My Beauty Lausanne
                            </span>
                          </div>
                        </li>
                        <li className="li-header">
                          <PhoneIcon className="icon-header" />
                          <div className="info-header">
                            <span class="text header-text">078 743 96 89
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    );
  }
}

export default Header;
