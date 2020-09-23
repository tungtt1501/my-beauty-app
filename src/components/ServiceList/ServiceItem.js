import React from 'react';

class ServiceItem extends React.Component {
  render() {
    var { serviceItem } = this.props;
    return (
      <li className="d-flex">
        <span>{serviceItem.serviceItemName}</span>
        <span>{serviceItem.serviceItemTime} min.</span>
        <span>{serviceItem.serviceItemPrice} Fr.</span>
      </li>
    );
  }
}

export default ServiceItem;
