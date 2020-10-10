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
              <h3 className="subheading">Prestations de service</h3>
              <h2 className="mb-1">Traitements</h2>
            </div>
          </div>
          <div className="row align-items-center">
          <div className="col-lg-4"></div>
            <div className="col-lg-4 d-flex align-items-stretch">
              <div id="accordion" className="myaccordion w-100 text-center py-5 px-1 px-md-4">
                <div>
                  <h3>Des prix</h3>
                  <p>My Beauty Lausanne vous propose des soins ongulaires et corporels de qualité.</p>
                </div>
                {this.showService(services)}
              </div>
            </div>
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
