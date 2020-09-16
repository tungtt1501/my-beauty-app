import React from 'react';
import { Element } from 'react-scroll';
import bg1 from './../../images/bg_1.jpg';

class Intro extends React.Component {

  render() {
    return (
      <Element id="home" name="home">
        <section className="hero-wrap js-fullheight" style={{backgroundImage: 'url(' + bg1 + ')'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <div className="col-md-10 ftco-animate text-center">
                <div className="icon">
                  <span className="flaticon-lotus" />
                </div>
                <h1>Spa &amp; Beauty Center</h1>
                <div className="row justify-content-center">
                  <div className="col-md-7 mb-3">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <p>
                  <a href="#" className="btn btn-primary p-3 px-5 py-4 mr-md-2">Get in Touch</a>
                  <a href="#" className="btn btn-outline-primary p-3 px-5 py-4 ml-md-2">Contact</a>
                </p>
              </div>
            </div>
          </div>
      </section>
      </Element>
      );
    }
}

export default Intro;
