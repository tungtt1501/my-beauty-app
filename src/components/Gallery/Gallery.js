import React from 'react';
import { Element } from 'react-scroll';

class Gallery extends React.Component {
    render() {
        return (
            <Element id="gallery" name="gallery">
                <section className="ftco-gallery ftco-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate text-center">
                                <h3 className="subheading">Gallery</h3>
                                <h2 className="mb-1">See the latest photos</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 ftco-animate">
                                <a href={'images/gallery-1.jpg'} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-1.jpg)' }}>
                                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span className="icon-instagram" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 ftco-animate">
                                <a href={'images/gallery-2.jpg'} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-2.jpg' }}>
                                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span className="icon-instagram" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 ftco-animate">
                                <a href={'images/gallery-3.jpg'} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-3.jpg)' }}>
                                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span className="icon-instagram" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 ftco-animate">
                                <a href={'images/gallery-4.jpg'} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-4.jpg)' }}>
                                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                        <span className="icon-instagram" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>
        );
    }
}

export default Gallery;
