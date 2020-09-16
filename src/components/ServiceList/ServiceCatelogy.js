import React from 'react';
import ServiceItem from './ServiceItem';

class ServiceCatelogy extends React.Component {
  render() {
    var { service } = this.props;
    var mapNumber = {
      "1": "One",
      "2": "Two",
      "3": "Three",
      "4": "Four",
    }

    var id = mapNumber[this.props.service.categoryId];
    return (
      <div className="card">
        <div className="card-header" id={`heading${id}`}>
          <h2 className="mb-0">
            <button className={`d-flex align-items-center justify-content-between btn btn-link ${service.categoryId == 1 ? "" : "collapsed"}`} data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded={`${service.categoryId == 1 ? "true" : "false"}`} aria-controls={`collapse${id}`}>
              {service.categoryName}
              <i className="fa" aria-hidden="true" />
            </button>
          </h2>
        </div>
        <div id={`collapse${id}`} className={`collapse ${service.categoryId == 1 ? "show" : ""}`} aria-labelledby={`heading${service.categoryId}`} data-parent="#accordion">
          <div className="card-body text-left">
            <ul>
              {this.showServiceItems(service.seviceItems)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  showServiceItems = (serviceItems) => {
    var result = null;
    if (serviceItems) {
      result = serviceItems.map((serviceItem, index) => {
        return (
          <ServiceItem
            key={index}
            serviceItem={serviceItem} />
        )
      })
    }
    return result;
  }
}

export default ServiceCatelogy;
