import React from 'react';
import ServiceCatelogy from './ServiceCatelogy'
import { Element } from 'react-scroll';
import {actFetchServicesRequest} from './../../actions/index'
import {connect} from 'react-redux'

class ServiceList extends React.Component {
  render() {
    var { services } = this.props;
    return (
      <Element id="services" name="services">
        <section className="ftco-section">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-12 heading-section ftco-animate text-center">
              <h3 className="subheading">Services</h3>
              <h2 className="mb-1">Treatments</h2>
            </div>
          </div>
          <div className="row align-items-center">
          <div className="col-lg-4"></div>
            {/* <div className="col-lg-4">
              <div className="row no-gutters">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center ftco-animate border border-right-0 border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-candle" />
                    </div>
                    <div className="text mt-2">
                      <h3>Salt &amp; Aroma</h3>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center ftco-animate border border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-spa-1" />
                    </div>
                    <div className="text mt-2">
                      <h3>Hydro</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center ftco-animate border border-right-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-stone" />
                    </div>
                    <div className="text mt-2">
                      <h3>Hot Stone</h3>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center ftco-animate border p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-lotus" />
                    </div>
                    <div className="text mt-2">
                      <h3>Aroma</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 d-flex align-items-stretch">
              <div id="accordion" className="myaccordion w-100 text-center py-5 px-1 px-md-4">
                <div>
                  <h3>Prices</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia</p>
                </div>
                {this.showService(services)}
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="row no-gutters">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center ftco-animate border border-right-0 border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-beauty-treatment" />
                    </div>
                    <div className="text mt-2">
                      <h3>Relaxation</h3>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center ftco-animate border border-bottom-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-relax" />
                    </div>
                    <div className="text mt-2">
                      <h3>Athlete</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center ftco-animate border border-right-0 p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-massage" />
                    </div>
                    <div className="text mt-2">
                      <h3>Thai</h3>
                      <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="treatment w-100 text-center ftco-animate border p-3 py-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-rose" />
                    </div>
                    <div className="text mt-2">
                      <h3>Rose</h3>
                      <p>A small river named Duden flows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      </Element>
      );
    }

    componentDidMount() {
      this.props.fetchAllServices();
    }
  
    showService = (services) => {
      var result = null;
      if (services) {
        result = services.map((service, index) => {
          return (
            <ServiceCatelogy
              key={index}
              service={service} />
          )
        })
      }
      return result;
    }
}



const mapStateToProps = state => {
  return {
    services: state.services
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllServices: () => {
      dispatch(actFetchServicesRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);
