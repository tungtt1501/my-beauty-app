import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import GalleryForm from './GalleryForm';

GalleryAddEditPage.propTypes = {

};

function GalleryAddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddMode = !photoId;

    const editedPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === +photoId);
        console.log({ photos: state.photos, photoId, foundPhoto });
        return foundPhoto;
    });

    const initialValues = isAddMode
        ? {
            file: ""
        }
        : editedPhoto;

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            console.log('Form submit: ', values);

            /*setTimeout(() => {
                if (isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999),
                    }
                    const action = addPhoto(newPhoto);
                    console.log({ action });
                    dispatch(action);
                } else {
                    // Do something here
                    const action = updatePhoto(values);
                    dispatch(action);
                }

                history.push('/photos');
                resolve(true);
            }, 2000);*/
        });
    }

    return (
        <div className="photo-edit">
            <div className="photo-edit__form">
                <GalleryForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default GalleryAddEditPage;