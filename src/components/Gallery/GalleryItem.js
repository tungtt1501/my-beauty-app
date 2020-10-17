import React from 'react';

GalleryItem.propTypes = {

};

function GalleryItem(props) {
    const { photo } = props;
    return (
        <div className="col-md-3 mb-3">
            <a href={`admin/${photo.photo}`} className="gallery ftco-animated image-popup img d-flex align-items-center" style={{ backgroundImage: `url(admin/${photo.photo})` }}>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                    <span className="icon-instagram" />
                </div>
            </a>
        </div>

    );
}

export default GalleryItem;