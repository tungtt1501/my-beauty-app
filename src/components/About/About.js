import React from 'react';
import { Element } from 'react-scroll';
import intro from './../../images/intro.jpg';
import offerdeal1 from './../../images/offer-deal-1.jpg'

class About extends React.Component {
  render() {
    return (
      <Element id="about" name="about">
        <section className="ftco-section ftco-intro" style={{backgroundImage: 'url(' + intro + ')'}}>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6">
              <div className="heading-section ftco-animate">
                <h2 className="mb-4">Benefits of Doing Spa &amp; Massage</h2>
              </div>
              <p className="ftco-animate">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <ul className="mt-5 do-list">
                <li className="ftco-animate"><a href="#"><span className="ion-ios-checkmark-circle mr-3" />Spa &amp; Massage boosts brain power</a></li>
                <li className="ftco-animate"><a href="#"><span className="ion-ios-checkmark-circle mr-3" />Spa &amp; Massage helps you to breathe better</a></li>
                <li className="ftco-animate"><a href="#"><span className="ion-ios-checkmark-circle mr-3" />Spa &amp; Massage improves your strength</a></li>
                <li className="ftco-animate"><a href="#"><span className="ion-ios-checkmark-circle mr-3" />Spa &amp; Massage helps you to focus</a></li>
                <li className="ftco-animate"><a href="#"><span className="ion-ios-checkmark-circle mr-3" />Spa &amp; Massage helps give meaning to your day</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="offer-deal text-center px-2 px-lg-5">
              <div className="img" style={{backgroundImage: 'url(' + offerdeal1 + ')'}} />
              <div className="text mt-4">
                <h3 className="mb-4">Book Your Treatment</h3>
                <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p><a href="#" className="btn btn-white px-4 py-3"> Book A Treatment <span className="ion-ios-arrow-round-forward" /></a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="offer-deal active text-center px-2 px-lg-5">
              <div className="img" style={{backgroundImage: 'url(images/offer-deal-2.jpg)'}} />
              <div className="text mt-4">
                <h3 className="mb-4">Great Gift Packages</h3>
                <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p><a href="#" className="btn btn-white px-4 py-3"> Book A Treatment <span className="ion-ios-arrow-round-forward" /></a></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch">
            <div className="offer-deal text-center px-2 px-lg-5">
              <div className="img" style={{backgroundImage: 'url(images/offer-deal-3.jpg)'}} />
              <div className="text mt-4">
                <h3 className="mb-4">Special Offer &amp; Deal</h3>
                <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p><a href="#" className="btn btn-white px-4 py-3"> Book A Treatment <span className="ion-ios-arrow-round-forward" /></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-section-services bg-light">
      <div className="container-fluid px-md-5">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="services text-center ftco-animate">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-candle" />
              </div>
              <div className="text mt-3">
                <h3>Aromatheraphy</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="services text-center ftco-animate">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-beauty-treatment" />
              </div>
              <div className="text mt-3">
                <h3>Skin Care</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="services text-center ftco-animate">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-stone" />
              </div>
              <div className="text mt-3">
                <h3>Herbal Spa</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="services text-center ftco-animate">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-relax" />
              </div>
              <div className="text mt-3">
                <h3>Body Massage</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
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

export default About;
