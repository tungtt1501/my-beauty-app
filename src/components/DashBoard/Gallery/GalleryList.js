import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from './PhotoCard';

GalleryList.propTypes = {
  photoList: PropTypes.array,
  onPhotoRemoveClick: PropTypes.func,
};

GalleryList.defaultProps = {
  photoList: [],
  onPhotoRemoveClick: null,
};

function GalleryList(props) {
  const { photoList, onPhotoRemoveClick } = props;

  return (
    <Row>
      {photoList.map(photo => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default GalleryList;