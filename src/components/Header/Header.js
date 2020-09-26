import React from 'react';
import { Element } from 'react-scroll';
import './Header.css'

class Header extends React.Component {

  render() {
    return (
      <Element id="home" name="home">
        <section className="hero-wrap js-fullheight" style={{backgroundImage: 'url(images/bg_1.jpg'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-10 ftco-animate text-center">
                <img className="header-img" src={'images/icon.png'}/>
                <div className="row justify-content-center">
                  <div className="col-md-7 mb-3">
                    <p style={{color: 'green'}}>My Beauty Lausanne vous accueille dans son nouvel institut de beauté dans un cadre chaleureux au centre ville de Lausanne (Place Pépinet 2) et vous propose des soins ongulaires et corporels de qualité.</p>
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
