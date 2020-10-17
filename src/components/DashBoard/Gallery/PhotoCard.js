  
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './PhotoCard.scss';

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
}

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(photo);
  }

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(photo);
  }

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} height={'270px'}/>

      <div className="photo__overlay">

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;