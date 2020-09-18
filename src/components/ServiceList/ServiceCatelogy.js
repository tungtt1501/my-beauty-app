import React from 'react';
import ServiceItem from './ServiceItem';
import { connect } from 'react-redux';
import {actFetchServiceItemsRequest} from './../../actions/index'

class ServiceCatelogy extends React.Component {
  findIndex = (services, categoryId) => {
    var result = -1;
    services.forEach((service, index) => {
        if (service.categoryId === categoryId) {
            result = index;
        }
    });
    return result;
  }
  render() {
    var { service, services } = this.props;
    var id = this.props.service.categoryId;

    var index = this.findIndex(services, id);

    
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
              {this.showServiceItems(services[index].serviceItems)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchServiceItemsByCategoryId(this.props.service.categoryId);
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

const mapStateToProps = state => {
  return {
    services: state.services
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchServiceItemsByCategoryId: (categoryId) => {
      dispatch(actFetchServiceItemsRequest(categoryId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCatelogy);
