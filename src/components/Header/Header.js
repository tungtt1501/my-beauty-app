import React from 'react';
import { Element } from 'react-scroll';
import bg1 from './../../images/bg_1.jpg';
import icon from './../../images/icon.png';
import './Header.css'

class Header extends React.Component {

  render() {
    return (
      <Element id="home" name="home">
        <section className="hero-wrap js-fullheight" style={{backgroundImage: 'url(' + bg1 + ')'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-10 ftco-animate text-center">
                <img className="header-img" src={icon}/>
                <div className="row justify-content-center">
                  <div className="col-md-7 mb-3">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
