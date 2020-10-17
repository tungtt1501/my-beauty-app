import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import { getAll } from '../DashBoard/Gallery/GallerySlice';
import GalleryItem from './GalleryItem';

function Gallery(props) {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos.list);
    const loadingStatus = useSelector(state => state.photos.status);

    useEffect(() => {
        if (loadingStatus == 'idle') {
            const fetchAllGalley = async () => {
                try {
                    const params = {};
                    await dispatch(getAll(params));
                } catch (error) {
                    console.log('Failed to fetch category list: ', error);
                }
            }

            fetchAllGalley();
        }
    }, [loadingStatus, dispatch]);

    return (
        <Element id="gallery" name="gallery">
            <section className="ftco-gallery ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center">
                            <h3 className="subheading">Galerie</h3>
                            <h2 className="mb-1">Voir les dernières photos</h2>
                        </div>
                    </div>
                    <div className="row">
                        {photos.map(photo => (
                            <GalleryItem photo={photo} />
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default Gallery;
