import React from 'react';
import ServiceItem from './ServiceItem';
import { useSelector } from 'react-redux';

function ServiceCatelogy(props) {
  const { service, serviceItems } = props;
  var id = service.categoryId;

  const showServiceItems = () => {
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

  return (
    <div className="card">
      <div className="card-header" id={`heading${id}`}>
        <h2 className="mb-0">
          <button className={`d-flex align-items-center justify-content-between btn btn-link ${id === 1 ? "" : "collapsed"}`} data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded={`${id === 1}`} aria-controls={`collapse${id}`}>
            {service.categoryName}
            <i className="fa" aria-hidden="true" />
          </button>
        </h2>
      </div>
      <div id={`collapse${id}`} className={`collapse ${id === 1 ? "show" : ""}`} aria-labelledby={`heading${id}`} data-parent="#accordion">
        <div className="card-body text-left">
          <ul>
            {showServiceItems()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceCatelogy;
